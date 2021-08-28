import { POSTS } from '../mytypes';
const INITIAL_STATE = {
    post: []
}



export default (state = INITIAL_STATE.post, action) => {
    switch(action.type) {
        case POSTS.POST_FETCH_REQUESTED: 
            return [];
        case POSTS.POST_FECTH_SUCCESS:
            return { ...state, [action.post.id] : action.post };
        case POSTS.POST_FETCH_FAILD: 
            return {...state, error: action.error}
        default:
            return state;
    }
}