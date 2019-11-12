import React from 'react';

function Filter ({setSearch, persons}){
  const searchstring = (event) => {
    setSearch(event.target.value)
    const filter = () => persons.filter((ele) => {
      return ele.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(filter())
    setSearch('')
    setSearch((filter()))
  }
 
 return (
   <div>
    <input onChange={searchstring}></input>
  </div>
 )

}


export default Filter;