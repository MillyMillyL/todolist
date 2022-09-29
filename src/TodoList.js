import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleCompleteTodos }) => {
  return todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        handleCompleteTodos={handleCompleteTodos}
      />
    );
  });
};

export default TodoList;
