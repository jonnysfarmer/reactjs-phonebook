import React from 'react';
import axios from 'axios';


function Display ({search}) {

  const remove = (id) => {
    axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(response => {
      console.log('removed')
      
    })
    
  }
  
  return (
  search.map((ele, i) =>
    <li key={i}>
      Name is {ele.name}, and the Number is {ele.number}
      <button onClick = {()=>remove(ele.id)}>remove</button>
    </li>
  )
  )
}

export default Display;