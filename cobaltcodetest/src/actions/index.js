import { 
  FETCH_TAGS_BEGIN,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_ERROR,
  SET_ENDPOINT,
  SET_TAG } from './../constants/action-types';
import axios from 'axios';
import { HOST, PORT } from './../constants/server';

export const fetchTagsBegin = () => ({ type: FETCH_TAGS_BEGIN });
export const fetchTagsSuccess = tags => ({ type: FETCH_TAGS_SUCCESS, payload: tags});
export const fetchTagsError = error => ({ type: FETCH_TAGS_ERROR, payload: error});
export const setEndpoint = endpoint => ({ type: SET_ENDPOINT, payload: endpoint });
export const setTag = tag => ({ type: SET_TAG, payload: tag });

export const fetchTags = (endpoint, tag) => {
  return dispatch => {
    dispatch(fetchTagsBegin());
    return axios.get(`${HOST}:${PORT}/parse?endpoint=${endpoint}&tag=${tag}`).then((data) => {
      dispatch(fetchTagsSuccess(data.data));
    }).catch((error) => dispatch(fetchTagsError(error)));
  }
}