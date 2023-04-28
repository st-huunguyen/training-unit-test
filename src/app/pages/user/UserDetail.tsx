import React, { useEffect } from 'react';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { RootState } from '@app/app.reducers';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetail } from './user.actions';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetail, isLoading, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);
  return (
    <>
      {isLoading && <p data-testid='loading'>Loading...</p>}
      {error && <p data-testid='error'>Error</p>}
      <Descriptions data-testid='user-detail-test' title={`This is information of ${userDetail?.username}`}>
        <Descriptions.Item label='Name'>{userDetail?.name}</Descriptions.Item>
        <Descriptions.Item label='Telephone'>
          {userDetail?.phone}
        </Descriptions.Item>
        <Descriptions.Item label='Email'>{userDetail?.email}</Descriptions.Item>
        <Descriptions.Item label='Website'>
          {userDetail?.website}
        </Descriptions.Item>
        <Descriptions.Item label='Address'>
          {userDetail?.address?.suite}, {userDetail?.address?.street},{' '}
          {userDetail?.address?.city}
        </Descriptions.Item>
        <Descriptions.Item label='Zipcode'>
          {userDetail?.address?.zipcode}
        </Descriptions.Item>
        <Descriptions.Item label='Geo'>
          lat:{userDetail?.address?.geo.lat} <br />
          lng: {userDetail?.address?.geo.lng}
        </Descriptions.Item>
        <Descriptions.Item label='Company'>
          name:{userDetail?.company?.name} <br />
          catchPhrase: {userDetail?.company?.catchPhrase} <br />
          bs: {userDetail?.company?.bs}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default UserDetail;
