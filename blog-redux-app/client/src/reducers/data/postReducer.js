import {POSTS} from "../../constants";


export default (state = {}, action) => {
    switch (action.type)  {
        case POSTS.FETCH_POST_REQUEST:
            return {};
        case POSTS.FETCH_POST_SUCCESS:
            return {...state, [action.post.id] : action.post};
        case POSTS.FETCH_POST_ERROR:
            return {...state, error: action.error}
        default:
            return state;
    }
}
