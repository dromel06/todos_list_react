import React from 'react'
import './styles/CreateTodoButton.css'

function CreateTodoButton() {

    const onClickButton = () => {
        alert('clicked')
    }

    return (
        <button className='CreateTodoButton'
        onClick={onClickButton}
        >༼ つ ◕_◕ ༽つ</button>
    )
}

export { CreateTodoButton };