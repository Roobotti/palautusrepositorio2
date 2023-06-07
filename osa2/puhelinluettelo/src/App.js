import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

axios.get('http://localhost:3001/api/persons').then(response => {
  const notes = response.data
  console.log(notes)
})
.catch(error => console.log(error))

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newMessage, setNewMessage] = useState({message:null, error:true})


  useEffect(() => {
    personService
    .getAll()
      .then(initialNotes => {
      setPersons(initialNotes)
      })
  }, [])

  const showMessage = (message, error=false) => {
    console.log(message)
    setNewMessage({message:message, error:error})
    setTimeout(() => setNewMessage({message:null, error:false}), 3000)
  }

  const removePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .dele(id)
        .then(deleted => {
          setPersons(persons.filter(p => p.id !== id))
          showMessage(`The contact '${person.name}' is deleted`)
        })
        .catch(error => showMessage(`The contact '${person.name}' was already deleted from server`, true)) 
    }
  } 


  const addPerson = (event) => {
    event.preventDefault()

    const personFound = persons.find( person => person.name === newName)
    if (personFound) {
      if (window.confirm(`${personFound.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(personFound.id, {...personFound, number:newNumber})
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personFound.id ? person : returnedPerson))
            showMessage(`The contact '${personFound.name}' is updated`)
          })
          .catch(error => showMessage(`The contact '${personFound.name}' was already deleted from server`, true))
      }
      setNewName('')
      setNewNumber('')
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }
  
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        showMessage(`The contact '${returnedPerson.name}' is added`)
      })
      .catch( error => {
        console.log(error.response.data)
        showMessage( (error.response.data.error), true)
      })
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage.message} error={newMessage.error}/>
      <Filter name={newFilter} onChange={handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>
      
      <Persons persons={persons} filter={newFilter} handle={removePerson}/>

    </div>
  )

}

export default App