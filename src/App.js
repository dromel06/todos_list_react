import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";


const todos = [
  { text: 'Cortar Cebollas', completed: false },
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
            <TodoItem key={todo.text} text={todo.text}/> 
        ))} 
      </TodoList>

      <CreateTodoButton />
    </>

  );
}

export default App;
