/* eslint-disable @typescript-eslint/no-explicit-any */
import ACTION_TYPES from '@app/core/constants/types';

export const getUserDetail = (payload: any) => ({
  type: ACTION_TYPES.GET_USER,
  payload,
});

export const getUserDetailSuccess = (data: any) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  payload: data,
});

export const getUserDetailError = (error: any) => ({
  type: ACTION_TYPES.GET_USER_FAIL,
  payload: error,
});

export const getUserList = () => {
  return {
    type: ACTION_TYPES.GET_USERS,
  };
};

export const getUserListSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    payload: data,
  };
};

export const getUserListError = (error: any) => {
  return {
    type: ACTION_TYPES.GET_USERS_FAIL,
    payload: error,
  };
};
