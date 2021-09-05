import { combineReducers } from 'redux';
import postsReducer from "./data/postsReducer";
import postReducer from "./data/postReducer";
import errorPostsReducer from './data/errorPostsReducer';
import messageReducer from "./data/messageReducer";

/*
Imports My Reducers
*/

export default combineReducers({
    posts: postsReducer,
    errorFetchPosts: errorPostsReducer,
    message: messageReducer,
    post: postReducer
})