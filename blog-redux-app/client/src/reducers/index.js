import { combineReducers } from 'redux';
import postsReducer from "./data/postsReducer";
import postReducer from "./data/postReducer";
import errorPostsReducer from './data/errorPostsReducer';
import deletePostState from "./data/deletePostState";

/*
Imports My Reducers
*/

export default combineReducers({
    posts: postsReducer,
    errorFetchPosts: errorPostsReducer,
    deletePostState: deletePostState,
    post: postReducer
})