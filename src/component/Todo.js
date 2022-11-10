import React from "react";

const Todo = ({ todo, handleCompleteTodos, handleCancelTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "completed" : ""}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleCompleteTodos(todo.id)}
        />
        {todo.name}
      </label>
      <button className="cancelBtn" onClick={() => handleCancelTodo(todo.id)}>
        Cancel
      </button>
    </li>
  );
};

export default Todo;
