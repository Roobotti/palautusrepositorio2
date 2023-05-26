
const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => (
  
    <form onSubmit={addPerson}>
      <div>  name: <input name={newName} onChange={handleNameChange} />  </div>
  
      <div>  number: <input number={newNumber} onChange={handleNumberChange}/> </div>
      
      <div>  <button type="submit">add</button>  </div>
    </form>
  )

export default PersonForm