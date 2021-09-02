import { combineReducers } from 'redux';
import postsReducer from "./data/postsReducer";
import postReducer from "./data/postReducer";

/*
Imports My Reducers
*/

export default combineReducers({
    posts: postsReducer,
    post: postReducer
})