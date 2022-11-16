export const LOCAL_STORAGE_KEY = "todoApp.todos";
const localTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export const InitialState = localTodos || [];
