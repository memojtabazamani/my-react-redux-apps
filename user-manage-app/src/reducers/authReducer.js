import { REGISTRION, LOGIN } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    hashId: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRION : // ==> Handle Registriton User
            return {...state, hashId: action.payload, isSignedIn: null};
        case LOGIN : // ==> Handle Login User!
            return {...state, hashId: action.payload, isSignedIn: true}
        default:
            return state
    }
}
