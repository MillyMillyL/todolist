import React, { useEffect, useReducer, useState } from "react";

import TodoList from "./component/TodoList";
import { todosReducer } from "./todosReducer";
import "./index.css";
const LOCAL_STORAGE_KEY = "todoApp.todos";
const TODAY = new Date().toString().slice(0, 15);

function App() {
  const localTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [todos, dispatch] = useReducer(todosReducer, localTodos || []);
  const [todoInput, setTodoInput] = useState("");

  console.log(todos);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    dispatch({ type: "add", payload: { name: todoInput.trim() } });
    setTodoInput("");
  }

  function handleCompleteTodos(id) {
    dispatch({ type: "complete", payload: { id: id } });
  }

  function handleClearTodos(e) {
    e.preventDefault();
    dispatch({ type: "clear" });
  }

  function handleCancelTodo(id) {
    dispatch({ type: "cancel", payload: { id: id } });
  }

  function handleEditConfirm(id, inputData) {
    dispatch({ type: "editConfirm", payload: { id: id, name: inputData } });
  }

  return (
    <main className="app">
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
      <p>Today {TODAY} </p>
      <ul>
        <TodoList
          todos={todos}
          handleCompleteTodos={handleCompleteTodos}
          handleCancelTodo={handleCancelTodo}
          handleEditConfirm={handleEditConfirm}
        />
      </ul>
      <p className="left">
        {todos?.filter((todo) => !todo.complete).length} uncompleted tasks to do
      </p>
      <button onClick={handleClearTodos} className="clearBtn">
        Clear Completed Todos
      </button>
    </main>
  );
}

export default App;
