


const Persons = ({persons, filter, handle}) => {

  const Person = ({name, number, id}) => {
    return(
      <li> 
        {name} {number} 
        <button onClick={() => handle(id)}>remove</button>
      </li>
      )
  }
    persons = persons.filter(person => person.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase())
    return (
      <div>
        <>{persons.map(person => <Person key={person.id} name={person.name} number={person.number} id={person.id}/>)}</>
      </div>
    )
  }

export default Persons