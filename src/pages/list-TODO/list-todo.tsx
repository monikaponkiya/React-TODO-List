import { List } from 'antd';
import React from 'react';

import { TodoListProps } from '../../util/type';
import TodoItem from '../item-TODO/item-todo';

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
  <List
    bordered
    dataSource={todos}
    renderItem={(todo) => (
      <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    )}
  />
);

export default TodoList;
