import { POSTS } from '../mytypes';

const detailPostReducer = (state = false, action) => {
    switch (action.type) {
        case POSTS.POST_FETCH_REQUESTED:
            return true;
        case POSTS.POST_FECTH_SUCCESS:
            return false;
        case POSTS.POST_FETCH_FAILD:
            return false;
        default:
            return state;
    }
}

export default detailPostReducer;