import {POSTS} from "../../constants";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type)  {
        case POSTS.DELETE_POST_REQUEST:
            return false;
        case POSTS.FETCH_POSTS_SUCCESS:
            return false;
        case POSTS.FETCH_POST_REQUEST:
            return false;
        case POSTS.FETCH_POSTS_ERROR:
            return false;
        case POSTS.DELETE_POST_SUCCESS:
            return true;
        case POSTS.DELETE_POST_ERROR:
            return action.error;
        default:
            return state;
    }
}
