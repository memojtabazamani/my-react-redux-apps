import {AUTH} from "../../constants";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type)  {
        case AUTH.SET_LOGIN:
            return action.auth;
        default:
            return state;
    }
}
