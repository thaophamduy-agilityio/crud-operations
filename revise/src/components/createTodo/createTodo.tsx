let nextId: number = 0;

const createTodo = (text: string, completed: boolean = false): { id: number; text: string; completed: boolean } => {
  return {
    id: nextId++,
    text,
    completed,
  };
}

export default createTodo