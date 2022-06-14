import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <div className="title">
            <h1 className="TitleTodo">Dromel TODOS List</h1>
            <h2 className="TodoCounter">Has Completado {completedTodos} tareas de {totalTodos}</h2>
        </div>
    );  
}

export { TodoCounter };