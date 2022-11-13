import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  handleCompleteTodos,
  handleCancelTodo,
  handleEditTodo,
  handleEditConfirm,
}) => {
  return todos?.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        handleCompleteTodos={handleCompleteTodos}
        handleCancelTodo={handleCancelTodo}
        handleEditTodo={handleEditTodo}
        handleEditConfirm={handleEditConfirm}
      />
    );
  });
};

export default TodoList;
