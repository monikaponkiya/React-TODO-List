import { TodoStatus } from './constant';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface AddTodoProps {
  input: string;
  setInput: (val: string) => void;
  addTodo: () => void;
}

export interface FilterProps {
  filter: TodoStatus;
  setFilter: (val: TodoStatus) => void;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
