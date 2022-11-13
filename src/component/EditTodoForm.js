import React, { useState } from "react";

const EditTodoForm = ({ todo, handleEditConfirm, setIsEdit }) => {
  const [editTodoInput, setEditTodoInput] = useState(todo.name);

  const inputChangeHandler = (e) => {
    setEditTodoInput(e.target.value);
  };

  return (
    <li>
      <input type="text" value={editTodoInput} onChange={inputChangeHandler} />
      <button
        onClick={() => {
          setIsEdit(false);
          handleEditConfirm(todo.id, editTodoInput);
        }}
      >
        Confirm
      </button>
      <button onClick={() => setIsEdit(false)}>Cancel</button>
    </li>
  );
};

export default EditTodoForm;
