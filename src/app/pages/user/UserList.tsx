import React, { useEffect, useState } from 'react';
import { Layout, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { RootState } from '@app/app.reducers';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from './user.actions';

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
      <Link to={`/users/${record.id}`}>{username}</Link>
    ),
  },
];

const UserList = () => {
  const dispatch = useDispatch();
  const { userList, isLoading, error } = useSelector(
    (state: RootState) => state.userReducer
  )

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <Layout data-testid='list-users'>
      {isLoading && <p data-testid='loading'>Loading...</p>}
      {error && <p data-testid='error'>Error</p>}
      <Header style={{ textAlign: 'center' }}>
        <h1>List User</h1>
      </Header>
      <Content>
        <Table
          columns={columns}
          rowKey={(user) => user.id}
          dataSource={userList}
          loading={isLoading}
        />
      </Content>
    </Layout>
  );
};

export default UserList;
