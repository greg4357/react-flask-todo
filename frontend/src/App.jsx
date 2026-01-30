import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  // 初回レンダリング時にデータ取得
  useEffect(() => {
    fetchTodos();
  }, []);

  // Todo一覧取得
  const fetchTodos = () => {
    axios.get(API_URL)
      .then(res => setTodos(res.data))
      .catch(err => console.error("Fetch error:", err));
  };

  // Todo追加
  const addTodo = () => {
    if (!title.trim()) return;

    axios.post(API_URL, { title })
      .then(() => {
        setTitle("");
        fetchTodos();
      })
      .catch(err => console.error("Add error:", err));
  };

  // Todo削除
  const deleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(fetchTodos)
      .catch(err => console.error("Delete error:", err));
  };

  // Todo完了状態切り替え
  const toggleTodo = (id, currentStatus) => {
    axios.patch(`${API_URL}/${id}`, { completed: !currentStatus })
      .then(fetchTodos)
      .catch(err => console.error("Toggle error:", err));
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
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, todo.completed)}
            />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
