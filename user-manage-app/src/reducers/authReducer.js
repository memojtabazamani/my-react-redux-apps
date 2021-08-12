import { REGISTRION, LOGIN, LOGOUT, FETCH_TOKEN } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: false,
    hashId: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRION : // ==> Handle Registriton User
            return {...state, hashId: action.payload, isSignedIn: true};
        case LOGIN : // ==> Handle Login User!
            return {...state, hashId: action.payload, isSignedIn: true}
        case LOGOUT: // ==> Handle Logout User!
            return { ...state, hashId: null, isSignedIn: false }
        case FETCH_TOKEN:
            return {...state, hashId: action.payload, isSignedIn: false}
        default:
            return state
    }
}
