import React, { useEffect, useState } from 'react';
import { Layout, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface DataType {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const { Header, Content } = Layout;

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: 'User name',
    dataIndex: 'username',
    width: '20%',
    render: (username, record) => (
      <Link to={`/users/${record.id}`}>
        {username}
      </Link>
    ),
  },
];

const UserList = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((results: any) => {
        console.log(results);
        setData(results.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Header style={{ textAlign: 'center' }}>
        <h1>List User</h1>
      </Header>
      <Content>
        <Table
          columns={columns}
          rowKey={(user) => user.id}
          dataSource={data}
          loading={loading}
        />
      </Content>
    </Layout>
  );
};

export default UserList;
