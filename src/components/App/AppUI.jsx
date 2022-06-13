import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
	const {
		error, 
		loading, 
		searchedTodos,
		completeTodo, 
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

    return (
		<>
			<TodoCounter />
			<TodoSearch/>
			<TodoList>
				{error && <p>Hubo un error, corran</p>}
				{loading && <p>Loading...</p>}
				{!loading && !searchedTodos.length && <p>No hay todos</p>}

				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.text} 
						text={todo.text} 
						completed={todo.completed} 
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<p>{searchedTodos[0]?.text}</p>
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
		</>

	);
    
}

export {AppUI};