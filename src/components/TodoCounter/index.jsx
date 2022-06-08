import React from "react";
import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <div className="title">
            <h1 className="TitleTodo">Dromel TODOS List</h1>
            <h2 className="TodoCounter">Has Completado    {completed} tareas de {total}</h2>
        </div>
    );  
}

export { TodoCounter };