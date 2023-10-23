import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Data from '../../data/dataStudent'

interface DataType {
  id: string;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  birth: string;
  gender: string;
  major: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Major',
    dataIndex: 'major',
    key: 'major',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a style={{color:'green'}}>Edit</a> |
        <a style={{color:'red'}}>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = Data;
  

const listStudents = () => {
  return (
   <div style={{width:'80%',float:'right',   marginLeft:'300px',marginTop:'40px'}}>
    <Table  columns={columns} dataSource={data} />
    </div> 
  )
}

export default listStudents