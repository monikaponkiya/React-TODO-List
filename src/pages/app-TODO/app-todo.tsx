import {
  Button,
  Card,
  Checkbox,
  Pagination,
  Popconfirm,
  Space,
  Table,
  Tag,
  Typography,
  message
} from 'antd';
import React, { useEffect, useState } from 'react';

import { TodoStatus } from '../../util/constant';
import { addTodoApi, deleteTodoApi, fetchTodos, updateTodoApi } from '../../util/todo-api';
import { Todo } from '../../util/type';
import AddTodo from '../add-TODO/add-todo';
import Filter from '../filter-TODO/filter-todo';

const { Title } = Typography;

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<TodoStatus>(TodoStatus.All);
  const [page, setPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);

  const limit = 3;

  const fetchTodosByPage = async (pageNumber: number) => {
    try {
      const data = await fetchTodos(limit, pageNumber);
      const formatted = data.todos.map((todo: any) => ({
        id: todo.id,
        text: todo.todo,
        completed: todo.completed
      }));
      setTodos(formatted);
      setTotalTodos(data.total);
    } catch {
      message.error('Failed to fetch todos');
    }
  };

  useEffect(() => {
    fetchTodosByPage(page);
  }, [page]);

  const addTodo = async () => {
    if (input.trim()) {
      try {
        const data = await addTodoApi(input.trim());
        const updatedTodos = [
          ...todos,
          { id: data.id, text: data.todo, completed: data.completed }
        ];
        setTodos(updatedTodos);
        setInput('');
        message.success('Todo added!');
      } catch {
        message.error('Failed to add todo');
      }
    }
  };

  const toggleTodo = async (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    const todo = updatedTodos.find((todo) => todo.id === id);
    if (todo) {
      try {
        await updateTodoApi(id, todo.completed);
        message.success('Todo updated!');
      } catch {
        message.error('Failed to update todo');
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoApi(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      message.success('Todo deleted!');
    } catch {
      message.error('Failed to delete todo');
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === TodoStatus.Completed) return todo.completed;
    if (filter === TodoStatus.Pending) return !todo.completed;
    return true;
  });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'text',
      key: 'text'
    },
    {
      title: 'Status',
      dataIndex: 'completed',
      key: 'completed',
      render: (completed: boolean) =>
        completed ? <Tag color="green">Completed</Tag> : <Tag color="gold">Pending</Tag>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Todo) => (
        <Space>
          <Popconfirm
            title={`Are you sure you want to mark this as ${record.completed ? 'pending' : 'completed'}?`}
            onConfirm={() => toggleTodo(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Checkbox checked={record.completed} />
          </Popconfirm>
          <Button type="link" danger onClick={() => deleteTodo(record.id)}>
            Delete
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 16px',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ width: '100%', maxWidth: 900 }}>
        <Card style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: 20 }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 15 }}>
            React Todo List
          </Title>
          <Space direction="horizontal" size="large" style={{ width: '100%' }}>
            <AddTodo input={input} setInput={setInput} addTodo={addTodo} />
            <Filter filter={filter} setFilter={setFilter} />
          </Space>
        </Card>

        {filteredTodos.length > 0 ? (
          <Card style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Table
              columns={columns}
              dataSource={filteredTodos}
              rowKey="id"
              pagination={false}
              size="middle"
              bordered
            />
            <Pagination
              current={page}
              pageSize={limit}
              total={totalTodos}
              onChange={(p) => setPage(p)}
              style={{ textAlign: 'center', marginTop: 20 }}
            />
          </Card>
        ) : (
          <Card style={{ textAlign: 'center', padding: 40 }}>
            <h3>No record found</h3>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
