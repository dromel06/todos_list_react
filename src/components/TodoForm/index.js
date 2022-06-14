import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    // TODO - cancel the form
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim() !== "") {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      alert("Ingrse un TODO");
    }
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label className="TodoFormLabel">Escribe tu nuevo TODO</label>
      <textarea
        className="TodoFormTextarea"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuierzo"
      />
      <button className="FormButton" type="button" onClick={onCancel}>
        Cancelar
      </button>
      <button className="FormButton" type="submit">
        Añadir Todo
      </button>
    </form>
  );
}

export { TodoForm };
