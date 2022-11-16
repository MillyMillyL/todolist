import React, { useContext } from "react";
import TodosContext from "../TodosContext";
import Todo from "./Todo";

const TodoList = ({}) => {
  const todosCtx = useContext(TodosContext);

  return todosCtx.todos?.map((todo) => {
    return <Todo todo={todo} key={todo.id} />;
  });
};

export default TodoList;
