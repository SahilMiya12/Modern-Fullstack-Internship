import { useState } from "react";
import TodoItem from "../components/TodoItem";
import type { Todo } from "../types/Todo";

function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  // CREATE
  function addTodo() {
    if (task === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  // DELETE
  function deleteTodo(id: number) {
    const filtered = todos.filter((todo) => todo.id !== id);

    setTodos(filtered);
  }

  // EDIT BUTTON CLICK
  function editTodo(id: number) {
    const selected = todos.find((todo) => todo.id === id);

    if (!selected) return;

    setTask(selected.text);
    setEditingId(id);
  }

  // UPDATE
  function updateTodo() {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingId
        ? { ...todo, text: task }
        : todo
    );

    setTodos(updatedTodos);

    setTask("");
    setEditingId(null);
  }

  return (
    <div>
      <h1>Todo CRUD App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {editingId ? (
        <button onClick={updateTodo}>
          Update
        </button>
      ) : (
        <button onClick={addTodo}>
          Add
        </button>
      )}

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;