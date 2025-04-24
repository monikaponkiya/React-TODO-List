export const LOCAL_STORAGE_KEY = 'todos';
export const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export enum TodoStatus {
  All = 'all',
  Completed = 'completed',
  Pending = 'pending'
}

export const TodoStatusList = [
  { id: TodoStatus.All, text: 'All' },
  { id: TodoStatus.Completed, text: 'Completed' },
  { id: TodoStatus.Pending, text: 'Pending' }
];
