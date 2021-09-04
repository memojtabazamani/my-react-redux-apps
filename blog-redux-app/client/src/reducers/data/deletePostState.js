import {POSTS} from "../../constants";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSTS.DELETE_POST_REQUEST:
            return {
                status: "default",
                message: ""
            };
        case POSTS.FETCH_POSTS_SUCCESS:
            return {
                status: "default",
                message: ""
            };
        case POSTS.FETCH_POST_REQUEST:
            return {
                status: "default",
                message: ""
            };
        case POSTS.FETCH_POSTS_ERROR:
            return {
                status: "default",
                message: ""
            };
        case POSTS.DELETE_POST_SUCCESS:
            return {
                status: "success",
                message: "Your Post Has Ben Deleted"
            };
        case POSTS.DELETE_POST_ERROR:
            return {
                status: "error",
                message: action.error
            };
        default:
            return state;
    }
}
