import { v4 } from "uuid";

export function todosReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: v4(), name: action.payload.name, complete: false },
      ];
    case "cancel":
      return todos.filter((todo) => todo.id !== action.payload.id);
    case "clear":
      return todos.filter((todo) => !todo.complete);
    case "complete":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      console.log(todos, "todos");
      return todos;
  }
}
