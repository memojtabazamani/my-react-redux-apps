import { POSTS } from "../../constants";

const INITIAL_STATE = {};


// This Reducer Used for show or handle messages

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSTS.DELETE_POST_REQUEST:
            return {};
        case POSTS.FETCH_POST_REQUEST:
            return {};
        case POSTS.FETCH_POSTS_REQUEST:
            return {};
        case POSTS.CREATE_POST_REQUEST:
            return {};


        case POSTS.FETCH_POSTS_ERROR:
            return {
                status: "error",
                message: action.error
            };
        case POSTS.FETCH_POST_ERROR:
            return {
                status: "error",
                message: action.error
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

        case POSTS.CREATE_POST_SUCCESS: // For Success
            return {
                status: "success",
                message: "Your Post Has Ben Created"
            }
        case POSTS.CREATE_POST_ERROR: // For Error
            return {
                status: "error",
                message: action.error
            }
        default:
            return state;
    }
}
