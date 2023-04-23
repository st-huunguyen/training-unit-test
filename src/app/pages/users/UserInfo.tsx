import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DataType } from './UserList';

const UserDetail = () => {
  const [userInfo, setUserInfo] = useState<DataType>(null);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Descriptions title={`Info of ${userInfo?.username}`}>
      <Descriptions.Item label='Name'>{userInfo?.name}</Descriptions.Item>
      <Descriptions.Item label='Telephone'>{userInfo?.phone}</Descriptions.Item>
      <Descriptions.Item label='Email'>{userInfo?.email}</Descriptions.Item>
      <Descriptions.Item label='Website'>{userInfo?.website}</Descriptions.Item>
      <Descriptions.Item label='Address'>
        {userInfo?.address?.suite}, {userInfo?.address?.street}, {userInfo?.address?.city}
      </Descriptions.Item>
      <Descriptions.Item label='Zipcode'>
        {userInfo?.address?.zipcode}
      </Descriptions.Item>
      <Descriptions.Item label='Geo'>
        lat:{userInfo?.address?.geo.lat} <br />
        lng: {userInfo?.address?.geo.lng}
      </Descriptions.Item>
      <Descriptions.Item label='Company'>
        name:{userInfo?.company?.name} <br />
        catchPhrase: {userInfo?.company?.catchPhrase} <br />
        bs: {userInfo?.company?.bs}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default UserDetail;
