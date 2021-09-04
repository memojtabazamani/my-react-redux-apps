import {POSTS} from '../../constants';
import _ from 'lodash';

const INITIAL_STATE = {
    posts: {}
};


export default (state = {}, action) => {
    switch (action.type) {
        case POSTS.FETCH_POSTS_REQUEST:
            return state;
        case POSTS.FETCH_POSTS_SUCCESS:
            return {...state, ..._.mapKeys(action.posts, 'id')};

        case POSTS.CREATE_POST_REQUEST:
            return state;
        case POSTS.CREATE_POST_SUCCESS:
            return {...state, [action.post.id]: action.post};
        case POSTS.CREATE_POST_ERROR:
            return {...state, error: action.error};

        case POSTS.UPDATE_POST_REQUEST:
            return state;
        case POSTS.UPDATE_POST_SUCCESS:
            return {...state, [action.post.id]: action.post};
        case POSTS.UPDATE_POST_ERROR:
            return {...state, error: action.error};

        case POSTS.DELETE_POST_REQUEST:
            return state;
        case POSTS.DELETE_POST_SUCCESS:
            return _.omit(state, action.id);

        default:
            return state;
    }
}