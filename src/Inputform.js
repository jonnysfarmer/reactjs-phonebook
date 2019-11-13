import React from 'react';
import axios from 'axios';

function Inputform({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setSearch }) {
  // This function sets newName as the target value of the form
  const inputName = (event) => {
    setNewName(event.target.value)
  }
  // As above, sets newNumber as the target value of the form
  const inputNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    const repeat = persons.every((ele) =>
      newName !== ele.name
    )
    if (repeat) {
      const prevID = persons[persons.length-1].id
      const newobj = {
        name: newName,
        number: newNumber,
        id: (prevID + 1)
        
      }
      axios
        .post('http://localhost:3001/persons', newobj)
        .then(response => {
          setPersons(persons.concat(newobj))
          setNewName('')
          setNewNumber('')
          setSearch(persons.concat(newobj))
        })
    } else {
      alert(`${newName} had already been added`)
      setNewName('')
      setNewNumber('')

    }
  }
  return (
    <div>
      <form onSubmit={addName}>
        <div>
        <label>Name    </label><input value={newName} onChange={inputName} />
          <br></br>
          <label>Number  </label> <input value={newNumber} onChange={inputNumber} />
        </div>
        <div>
          <button className='submit-button' type="submit">Add</button>
        </div>
      </form>
    </div>
  )



}

export default Inputform;