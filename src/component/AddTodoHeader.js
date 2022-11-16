import React, { useContext, useState } from "react";
import TodosContext from "../TodosContext";

const AddTodoHeader = ({}) => {
  const [todoInput, setTodoInput] = useState("");
  const todosCtx = useContext(TodosContext);

  function handleAddTodo(e) {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    todosCtx.dispatch({ type: "add", payload: { name: todoInput.trim() } });
    setTodoInput("");
  }

  return (
    <header className="header">
      <h1>Todo List</h1>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      ></input>
      <button onClick={handleAddTodo} className="addBtn">
        Add Todo
      </button>
    </header>
  );
};

export default AddTodoHeader;
