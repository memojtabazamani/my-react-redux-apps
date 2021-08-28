import { POSTS } from '../mytypes';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case POSTS.POSTS_FETCH_REQUESTED:
            return true;
        case POSTS.POSTS_FETCH_SUCCESS:
            return false;
        case POSTS.POSTS_FETCH_FAILD:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;