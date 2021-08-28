import { POSTS } from '../mytypes';
import _ from 'lodash';
const INITIAL_STATE = {
    posts: []
}



export default (state = INITIAL_STATE.posts, action) => {
    switch(action.type) {
        case POSTS.POSTS_FETCH_REQUESTED: 
            return state;
        case POSTS.POSTS_FETCH_SUCCESS:
            return { ...state, ..._.mapKeys(action.posts, 'id') };
        case POSTS.POSTS_FETCH_FAILD: 
            return {...state, error: action.error}
        default:
            return state;
    }
}