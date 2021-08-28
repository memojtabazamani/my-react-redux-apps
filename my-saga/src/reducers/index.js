import { combineReducers  } from 'redux';
import  postsReducers     from './postsReducer';
import  postLoadReducer from './postLoadReducer';
import  postReducer from './postReducer';
import  detailPostReducer from "./detailPostReducer";

export default combineReducers({
    posts: postsReducers,
    isLoading: postLoadReducer,
    currentPost: postReducer,
    isLoadingDetail: detailPostReducer
})