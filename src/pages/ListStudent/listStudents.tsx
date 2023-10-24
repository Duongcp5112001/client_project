import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import data from '../../data/dataStudent'
import { Link } from 'react-router-dom';

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

const ListStudents = () => {
  const [dataSource, setDataSource] = useState(data)
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
      render: (_: any, dataSource: DataType) => (
        <Space size="middle">
          <Link style={{ color: 'green', textDecoration: 'none'  }} to={''}>Detail</Link> |
          <Link style={{ color: 'red', textDecoration: 'none' }} onClick={() => deleteStudent(dataSource.id)} to={''}>Delete</Link>
        </Space>
      ),
    },
  ];
  
  const deleteStudent = (id: string) => {
    const updatedData = dataSource.filter((item: any) => item.id !== id);
    setDataSource(updatedData);
  }

  return (
   <div style={{width:'80%',float:'right',   marginLeft:'300px',marginTop:'130px'}}>
    <Table  columns={columns} dataSource={dataSource} />
    </div> 
  )
}

export default ListStudents