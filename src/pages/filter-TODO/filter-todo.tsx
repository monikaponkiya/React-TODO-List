import { Select } from 'antd';
import React from 'react';

import { TodoStatusList } from '../../util/constant';
import { FilterProps } from '../../util/type';

const { Option } = Select;

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => (
  <Select value={filter} onChange={setFilter} style={{ width: 200 }}>
    {TodoStatusList.map((status) => (
      <Option key={status.id} value={status.id}>
        {status.text}
      </Option>
    ))}
  </Select>
);

export default Filter;
