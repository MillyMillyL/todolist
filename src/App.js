import React, { useEffect, useReducer, useState } from "react";
import TodoList from "./component/TodoList";
import { todosReducer } from "./todosReducer";
import "./index.css";
import AddTodoHeader from "./component/AddTodoHeader";
import { InitialState, LOCAL_STORAGE_KEY } from "./InitialState";
import TodosContext from "./TodosContext";
const TODAY = new Date().toString().slice(0, 15);

function App() {
  const [todos, dispatch] = useReducer(todosReducer, InitialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
    <TodosContext.Provider
      value={{
        todos,
        dispatch,
        handleCompleteTodos,
        handleClearTodos,
        handleCancelTodo,
        handleEditConfirm,
      }}
    >
      <div className="app">
        <AddTodoHeader dispatch={dispatch} />
        <p>Today {TODAY} </p>
        <ul>
          <TodoList
            handleCompleteTodos={handleCompleteTodos}
            handleCancelTodo={handleCancelTodo}
            handleEditConfirm={handleEditConfirm}
          />
        </ul>
        <p className="left">
          {todos?.filter((todo) => !todo.complete).length} uncompleted tasks to
          do
        </p>
        <button onClick={handleClearTodos} className="clearBtn">
          Clear Completed Todos
        </button>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
