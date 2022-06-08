import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    // const [searchValue, setSearchValue] = React.useState('');


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
