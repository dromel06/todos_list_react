import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";


const todos = [
  { text: 'Cortar Cebollas', completed: true },
  { text: 'Hacer una tarea', completed: false },
  { text: 'Hacer otra tarea', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> 
        ))} 
      </TodoList>

      <CreateTodoButton />
    </>

  );
}

export default App;
