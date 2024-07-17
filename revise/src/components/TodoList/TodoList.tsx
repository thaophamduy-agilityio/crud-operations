import { useState } from 'react';
import { createTodo } from '@components/';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface NewTodoProps {
  onAdd: (todo: Todo) => void;
}

const initialTodos: { id: number; text: string; completed: boolean }[] = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left
      </footer>
    </>
  );
};

const NewTodo = ({ onAdd }: NewTodoProps) => {
  const [text, setText] = useState<string>('');

  const handleAddClick = () => {
    setText('');
    onAdd(createTodo(text));
  };

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
};

export default TodoList;

