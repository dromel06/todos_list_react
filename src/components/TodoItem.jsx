import React from "react";
import './styles/TodoItem.css'

function TodoItem(props) {

    const onCompleted = () => {
        alert("Ya completaste la tarea " + props.text)
    }
    const onDelete = () => {
        alert("Borraste la tarea " + props.text)
    }
    return (
        <li className="TodoItem">
            <span className={`gancho ${props.completed && 'completed'}`} 
            onClick={onCompleted}
            >✓</span>
            <p className={`${props.completed && 'textoCompleted'}`}>{props.text}</p>
            <span className="borrar" onClick={onDelete}>X</span>
        </li>
    )
}

export { TodoItem };