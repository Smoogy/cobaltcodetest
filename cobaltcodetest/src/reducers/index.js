import { 
  FETCH_TAGS_BEGIN,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_ERROR,
  SET_ENDPOINT,
  SET_TAG } from '../constants/action-types';

const initialState = {
  tags: [],
  tag: '',
  endpoint: '',
  loading: false,
  error: null,
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_TAGS_SUCCESS:
      return { ...state, loading: false, error: null, tags: action.payload };
    case FETCH_TAGS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case SET_TAG:
      return { ...state, tag: action.payload };
    case SET_ENDPOINT:
      return { ...state, endpoint: action.payload };
    default:
      return state;
  }
};
export default baseReducer;