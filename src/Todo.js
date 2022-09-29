import React from "react";

const Todo = ({ todo, handleCompleteTodos }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleCompleteTodos(todo.id)}
        />
        {todo.name}
      </label>
    </li>
  );
};

export default Todo;
