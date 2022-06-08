import React from "react";
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span className={`gancho ${props.completed && 'completed'}`}
                onClick={props.onComplete}
            >✓</span>
            <p className={`${props.completed && 'textoCompleted'}`}>{props.text}</p>
            <span 
                className="borrar" 
                onClick={props.onDelete}
            >X</span>
        </li>
    )
}

export { TodoItem };