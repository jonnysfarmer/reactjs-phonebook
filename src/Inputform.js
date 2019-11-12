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
      // console.log('button clicked', event.target)
      const newobj = {
        name: newName,
        number: newNumber
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
          name: <input value={newName} onChange={inputName} />
          <br></br>
          number: <input value={newNumber} onChange={inputNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )



}

export default Inputform;