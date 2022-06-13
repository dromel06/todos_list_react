import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);


    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
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
