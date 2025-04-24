import { Button, Input, Space } from 'antd';
import React from 'react';

import { AddTodoProps } from '../../util/type';

const AddTodo: React.FC<AddTodoProps> = ({ input, setInput, addTodo }) => (
  <Space.Compact style={{ width: '100%' }}>
    <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task" />
    <Button type="primary" onClick={addTodo} disabled={!input.trim()}>
      Add
    </Button>
  </Space.Compact>
);

export default AddTodo;
