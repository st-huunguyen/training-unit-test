/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-style */
import { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import {
  getUserDetailError,
  getUserDetailSuccess,
  getUserListError,
  getUserListSuccess,
} from './pages/user/user.actions';
import ACTION_TYPES from '@app/core/constants/types';
import { UserService } from '@app/core/services/user.service';

const userService = new UserService();

export function* getUserDetail({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield userService.getUserDetail(payload);
    yield put(getUserDetailSuccess(res));
  } catch (error) {
    yield put(getUserDetailError(error));
  }
}

export function* getUserList() {
  try {
    const res: AxiosResponse<any> = yield userService.getUserList();
    yield put(getUserListSuccess(res));
  } catch (error) {
    yield put(getUserListError(error));
  }
}

export function* watchUsers() {
  yield all([
    takeLatest(ACTION_TYPES.GET_USERS, getUserList),
    takeLatest(ACTION_TYPES.GET_USER, getUserDetail),
  ]);
}
