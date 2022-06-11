import React from "react";
import { AppUI } from "./AppUI";
import "./App.css";


// const defaultTodos = [
	// { text: 'Cortar Cebollas', completed: false },
	// { text: 'Hacer una tarea', completed: true },
	// { text: 'Hacer otra tarea', completed: false },
	// { text: 'tarea', completed: true },
// ];

function useLocalStorage(itemName, initialValue) {

	const localStorageItem = localStorage.getItem(itemName);
	let parsedItem;

	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = [];
	}

	else {
		parsedItem = JSON.parse(localStorageItem);
	}

	const [item, setItem] = React.useState(parsedItem);

	const saveItem = (newItem) => {
		setItem(newItem);
		localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
	}

	return [item, saveItem];

}

function App() {
	const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);


	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length > 0) {
		searchedTodos = todos
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLocaleLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText)
		})
	}

	


	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	}

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1)
		saveTodos(newTodos);
	}

	React.useEffect(() => {
		console.log("useEffect");
	});

	return (
		<AppUI 
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	)

	
}

export default App;
