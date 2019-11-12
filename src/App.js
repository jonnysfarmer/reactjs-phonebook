import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js'
import Inputform from './Inputform.js'
import Filter from './Filter.js'
import axios from 'axios'



function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setSearch(response.data)
      })
  }
 

  useEffect(hook, [])
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-div'>
      <h2>PhoneBook</h2>
        <h3>search</h3>
        <Filter setSearch={setSearch} persons={persons} />
        <h3>Add New</h3>
        <Inputform newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setSearch={setSearch} />
        <h2>Numbers</h2>
        <ul><Display search={search}/></ul>
      </div>
    </div>
  );
}

export default App;
