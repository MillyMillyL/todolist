import TodoList from "./TodoList";
import "./index.css";
import React, { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const localTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [todos, setTodos] = useState(localTodos || []);
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(storedTodos);
  //   console.log(todos);
  // }, []);

  function handleAddTodo(e) {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prev) => {
      return [...prev, { id: v4(), name: name, complete: false }];
    });

    todoNameRef.current.value = null;
  }

  function handleCompleteTodos(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearTodos(e) {
    e.preventDefault();
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  function handleCancelTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="app">
      <header className="header">
        <h1>Todo List</h1>
        <input ref={todoNameRef}></input>
        <button onClick={handleAddTodo} className="addBtn">
          Add Todo
        </button>
      </header>
      <ul>
        <TodoList
          todos={todos}
          handleCompleteTodos={handleCompleteTodos}
          handleCancelTodo={handleCancelTodo}
        />
      </ul>
      <p className="left">
        {todos.filter((todo) => !todo.complete).length} uncompleted tasks to do
      </p>
      <button onClick={handleClearTodos} className="clearBtn">
        Clear Completed Todos
      </button>
    </main>
  );
}

export default App;
