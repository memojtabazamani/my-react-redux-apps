import { REGISTRION, LOGIN, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: false,
    hashId: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRION : // ==> Handle Registriton User
            return {...state, hashId: action.payload, isSignedIn: false};
        case LOGIN : // ==> Handle Login User!
            return {...state, hashId: action.payload, isSignedIn: true}
        case LOGOUT: // ==> Handle Logout User!
            return { ...state, hashId: null, isSignedIn: false }
        default:
            return state
    }
}
