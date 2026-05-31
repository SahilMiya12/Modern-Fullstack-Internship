import type { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
}

function TodoItem({ todo, deleteTodo, editTodo }: Props) {
  return (
    <li>
      {todo.text}

      <button onClick={() => editTodo(todo.id)}>
        Edit
      </button>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;