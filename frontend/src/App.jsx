import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTitle('');
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <h1 className="text-center mb-4">
          📝 <strong>My Todo App</strong>
        </h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task..."
              value={title}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>

        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              {todo.title}
              <span className="badge bg-secondary">{todo.completed ? '✅ Done' : '⏳ Pending'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
