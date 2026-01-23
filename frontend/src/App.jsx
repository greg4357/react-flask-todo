import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/todos")
      .then(res => setTodos(res.data));
  }, []);

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
