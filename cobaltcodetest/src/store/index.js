import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import baseReducer from "../reducers/index";


const store = createStore(baseReducer, applyMiddleware(thunk));

export default store;
