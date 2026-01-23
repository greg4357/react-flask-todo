import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get(API_URL).then(res => setTodos(res.data));
  };

  const addTodo = () => {
    if (!title.trim()) return;

    axios.post(API_URL, { title }).then(() => {
      setTitle("");
      fetchTodos();
    });
  };

  return (
    <div>
      <h1>TODO List</h1>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New TODO"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => {
              axios.delete(`${API_URL}/${todo.id}`)
                .then(fetchTodos);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
