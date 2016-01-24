'use strict';

import { DataActions } from '../actions';

export default function data(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case DataActions.DATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        config: action.config
      });
    case DataActions.DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        message: ''
      });
    case DataActions.DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message
      });
    default:
      return state;
  }
};
