import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_SINGLE_STREAM,
  FETCH_MULTIPLE_STREAMS
} from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_MULTIPLE_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }


}