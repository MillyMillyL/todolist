import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleCompleteTodos, handleCancelTodo }) => {
  return todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        handleCompleteTodos={handleCompleteTodos}
        handleCancelTodo={handleCancelTodo}
      />
    );
  });
};

export default TodoList;