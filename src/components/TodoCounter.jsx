import React from "react";
import './styles/TodoCounter.css'

function TodoCounter() {
    return (
        <div className="title">
            <h1 className="TitleTodo">Dromel TODOS List</h1>
            <h2 className="TodoCounter">Has Completado 3 tareas de 2</h2>
        </div>
    );  
}

export { TodoCounter };