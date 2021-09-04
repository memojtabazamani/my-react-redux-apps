import {POSTS} from "../../constants";

const INITIAL_STATE = {
    state: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type)  {
        case POSTS.FETCH_POST_REQUEST:
            return state;
        case POSTS.FETCH_POST_SUCCESS:
            return {...state, [action.post.id] : action.post};
        case POSTS.FETCH_POST_ERROR:
            return {...state, error: action.error}
        default:
            return state;
    }
}
