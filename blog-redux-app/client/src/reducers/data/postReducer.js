import {POSTS} from "../../constants";

const INITIAL_STATE = {
    post: {}
};

export default (post = INITIAL_STATE, action) => {
    switch (action.type)  {
        case POSTS.FETCH_POST_REQUEST:
            return state;
        case POSTS.FETCH_POSTS_SUCCESS:
            return {...state, [action.post.id] : action.post};
        case POSTS.FETCH_POSTS_ERROR:
            return {...state, error: action.error}
    }
}
