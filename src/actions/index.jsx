import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_SINGLE_STREAM,
  FETCH_MULTIPLE_STREAMS
} from './types';
import streams from '../apis/streams';
import history from '../history';


export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const rspns = await streams.post('./streams', { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: rspns.data });
    history.push('/');
  }
}

export const fetchMultipleStreams = () => async dispatch => {
  const responce = await streams.get('/streams');
  dispatch({ type: FETCH_MULTIPLE_STREAMS, payload: responce.data });
}

export const fetchSingleStream = (id) => async dispatch => {
  const resp = await streams.get(`streams/${id}`);
  dispatch({ type: FETCH_SINGLE_STREAM, payload: resp.data });
}

export const editStream = (id, formValues) => async dispatch => {
  const resp = await streams.patch(`streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: resp.data })
  history.push('/');
}
export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
}

