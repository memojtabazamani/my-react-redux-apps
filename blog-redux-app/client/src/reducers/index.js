import { combineReducers } from 'redux';
import postsReducer from "./data/postsReducer";
import postReducer from "./data/postReducer";
import errorPostsReducer from './data/errorPostsReducer';

/*
Imports My Reducers
*/

export default combineReducers({
    posts: postsReducer,
    errorFetchPosts: errorPostsReducer,
    post: postReducer
})