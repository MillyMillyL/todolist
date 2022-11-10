import TodoList from "./component/TodoList";
import "./index.css";
import React, { useEffect, useReducer, useState } from "react";
import { todosReducer } from "./todosReducer";
const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const localTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [todos, dispatch] = useReducer(todosReducer, localTodos || []);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    dispatch({ type: "add", payload: { name: todoInput } });
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
      <ul>
        <TodoList
          todos={todos}
          handleCompleteTodos={handleCompleteTodos}
          handleCancelTodo={handleCancelTodo}
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
