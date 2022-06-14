import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
import "./App.css";


// const defaultTodos = [
// 	{ text: 'Cortar Cebollas', completed: false },
// 	{ text: 'Hacer una tarea', completed: true },
// 	{ text: 'Hacer otra tarea', completed: false },
// 	{ text: 'tarea', completed: true },
// ];



function App() {


	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	)

	
}

export default App;
