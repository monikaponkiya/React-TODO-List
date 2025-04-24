import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox, List } from 'antd';
import React from 'react';

import { TodoItemProps } from '../../util/type';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => (
  <List.Item
    actions={[<Button icon={<DeleteOutlined />} danger onClick={() => deleteTodo(todo.id)} />]}
  >
    <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)}>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
    </Checkbox>
  </List.Item>
);
export default TodoItem;
