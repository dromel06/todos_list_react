import React from 'react';
import './styles/TodoSearch.css'

function TodoSearch() {
  const onSearchValueChange = (event) => {
    alert(event.target.value)
  }
  return (
    <div className='TodoSearch'>
        <input className='TodoInputSearch' type="text" 
        placeholder='Cebolla'
        onChange={onSearchValueChange} />
        <button className='TodoButtonSearch'>🔎</button>
    </div>
  )
}

export { TodoSearch };
