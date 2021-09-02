import {POSTS} from '../../constants';
import _ from 'lodash';

const INITIAL_STATE = {
    posts: {}
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSTS.FETCH_POSTS_REQUEST:
            return state;
        case POSTS.FETCH_POSTS_SUCCESS:
            return {...state, ..._.mapKeys(action.posts, 'id')};
        case POSTS.FETCH_POSTS_ERROR:
            return {...state, error: action.error};

        case POSTS.CREATE_POST_REQUEST:
            return state;
        case POSTS.CREATE_POST_SUCCESS:
            return {...state, [action.values.id]: action.values};
        case POSTS.CREATE_POST_ERROR:
            return {...state, error: action.error};

        case POSTS.UPDATE_POST_REQUEST:
            return state;
        case POSTS.UPDATE_POST_SUCCESS:
            return {...state, [action.values.id]: action.values};
        case POSTS.UPDATE_POST_ERROR:
            return {...state, error: action.error};

        default:
            return state;
    }
}