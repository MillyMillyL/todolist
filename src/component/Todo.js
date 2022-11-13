import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import EditTodoForm from "./EditTodoForm";
import { useState } from "react";

const Todo = ({
  todo,
  handleCompleteTodos,
  handleCancelTodo,
  handleEditConfirm,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit && (
        <li>
          <label className={todo.complete ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleCompleteTodos(todo.id)}
            />
            {todo.name}
          </label>
          <FontAwesomeIcon
            icon={faXmark}
            className="cancelBtn"
            onClick={() => handleCancelTodo(todo.id)}
          />
          <FontAwesomeIcon
            icon={faPencil}
            className="editBtn"
            onClick={() => setIsEdit(true)}
          />
        </li>
      )}

      {isEdit && (
        <EditTodoForm
          todo={todo}
          handleEditConfirm={handleEditConfirm}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
};

export default Todo;
