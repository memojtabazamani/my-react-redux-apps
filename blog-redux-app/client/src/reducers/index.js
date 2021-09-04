import { combineReducers } from 'redux';
import postsReducer from "./data/postsReducer";
import postReducer from "./data/postReducer";
import errorPostsReducer from './data/errorPostsReducer';
import deletePostReducerState from "./data/deletePostReducerState";

/*
Imports My Reducers
*/

export default combineReducers({
    posts: postsReducer,
    errorFetchPosts: errorPostsReducer,
    deletePostSuccess: deletePostReducerState,
    post: postReducer
})