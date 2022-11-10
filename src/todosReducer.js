import React from "react";

const localTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
const [todos, setTodos] = useState(localTodos || []);
const todoNameRef = useRef();
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}, [todos]);

export default todosReducer;
