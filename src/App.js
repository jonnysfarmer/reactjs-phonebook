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
        <h3>Self taught React project</h3>
      </header>
      <div className='App-div'>
      <h1>Phone Book</h1>
        <h2>Search</h2>
        <Filter setSearch={setSearch} persons={persons} />
        <h2>Add New</h2>
        <Inputform newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setSearch={setSearch} />
        <h2>Numbers</h2>
        <ul><Display search={search} setPersons = {setPersons} setSearch = {setSearch} /></ul>
      </div>
    </div>
  );
}

export default App;
