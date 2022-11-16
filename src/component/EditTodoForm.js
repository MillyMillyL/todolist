import React, { useContext, useState } from "react";
import TodosContext from "../TodosContext";

const EditTodoForm = ({ todo, setIsEdit }) => {
  const [editTodoInput, setEditTodoInput] = useState(todo.name);
  const todosCtx = useContext(TodosContext);

  const inputChangeHandler = (e) => {
    setEditTodoInput(e.target.value);
  };

  return (
    <li>
      <input type="text" value={editTodoInput} onChange={inputChangeHandler} />
      <button
        onClick={() => {
          setIsEdit(false);
          todosCtx.handleEditConfirm(todo.id, editTodoInput);
        }}
      >
        Confirm
      </button>
      <button onClick={() => setIsEdit(false)}>Cancel</button>
    </li>
  );
};

export default EditTodoForm;
