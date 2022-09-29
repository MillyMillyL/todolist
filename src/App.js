import TodoList from "./TodoList";
import "./index.css";
import React, { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  console.log(todos, "outer");

  useEffect(() => {
    console.log(todos, "1");
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTodos) setTodos(storedTodos);
    console.log(todos, "11");
  }, []);

  useEffect(() => {
    console.log(todos, "2");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prev) => {
      return [...prev, { id: v4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    // e.preventDefault();
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <p>{todos.filter((todo) => !todo.complete).length} left to do</p>
    </>
  );
}

export default App;
