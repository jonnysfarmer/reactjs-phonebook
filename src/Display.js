import React from 'react';
import axios from 'axios';


function Display ({ search, setPersons, setSearch }) {

  const remove = (id, i) => {
    const newarr1 = search.slice(0, i)
    const newarr2 = search.slice(i+1)
    const final = newarr1.concat(newarr2)
    console.log(final)
    
    axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(response => {
      console.log('removed')
      setPersons(final)
      setSearch(final)
      
    })
    
  }
  
  return (
  search.map((ele, i) =>
    <li key={i}>
      Name is {ele.name}, and the Number is {ele.number}
      <button className='remove' onClick = {()=>remove(ele.id, i)}>X</button>
    </li>
  )
  )
}

export default Display;