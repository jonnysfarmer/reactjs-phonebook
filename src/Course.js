import React, {useState} from 'react';



function Course ({course2}) {
  const info = () => course2.parts.map((ele) =>
    <li key ={ele.id}>
      {ele.name}, {ele.exercises}
    </li>
  )
  const sum = () => course2.parts.reduce((acc, ele) =>{
    return acc += ele.exercises

  }, 0)

  return (
    <div>
    <h1>{course2.name}</h1>
    <ul>
      {info()}
    </ul>
    <p>Sum of exercises is, {sum()}</p>
    </div>
  )

  
}




export default Course