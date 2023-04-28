/* eslint-disable @typescript-eslint/no-explicit-any */
import ACTION_TYPES from '@app/core/constants/types';

interface Action {
  type: string,
  payload: any
}

interface StateData {
  userList: any,
  userDetail: any
  isLoading: boolean;
  error: string;
  hasError: boolean;
}

const IInitUserProps = {
  userList: null,
  userDetail: null,
  isLoading: false,
  hasError: false,
  error: '',
};

export const userReducer = (
  state: StateData = IInitUserProps,
  action: Action
) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
      };

    case ACTION_TYPES.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case ACTION_TYPES.GET_USER:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetail: action.payload,
      };

    case ACTION_TYPES.GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
