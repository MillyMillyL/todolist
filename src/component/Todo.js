import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import EditTodoForm from "./EditTodoForm";
import { useState, useContext } from "react";
import TodosContext from "../TodosContext";

const Todo = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const todosCtx = useContext(TodosContext);

  return (
    <>
      {!isEdit && (
        <li>
          <label className={todo.complete ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => todosCtx.handleCompleteTodos(todo.id)}
            />
            {todo.name}
          </label>
          <FontAwesomeIcon
            icon={faXmark}
            className="cancelBtn"
            onClick={() => todosCtx.handleCancelTodo(todo.id)}
          />
          <FontAwesomeIcon
            icon={faPencil}
            className="editBtn"
            onClick={() => setIsEdit(true)}
          />
        </li>
      )}

      {isEdit && <EditTodoForm todo={todo} setIsEdit={setIsEdit} />}
    </>
  );
};

export default Todo;
