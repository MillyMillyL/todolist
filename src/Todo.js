import { useState } from "react";
import React from "react";

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(todo.complete);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {todo.name}
    </label>
  );
};

export default Todo;
