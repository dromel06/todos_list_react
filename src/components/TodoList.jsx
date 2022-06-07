import React from "react";
// import TodoItem from "./TodoItem";
import "./styles/TodoList.css";

function TodoList(props) {
    return (
        <section>
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };