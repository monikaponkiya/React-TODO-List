import { BASE_URL } from './constant';

export const fetchTodos = async (limit: number, page: number) => {
  const skip = (page - 1) * limit;
  const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error('Failed to fetch todos');
  return await res.json();
};

export const addTodoApi = async (text: string) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todo: text, completed: false, userId: 5 })
  });
  if (!res.ok) throw new Error('Failed to add todo');
  return await res.json();
};

export const updateTodoApi = async (id: number, completed: boolean) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  if (!res.ok) throw new Error('Failed to update todo');
};

export const deleteTodoApi = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete todo');
};
