import { REGISTRION } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    hashId: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRION :
            return {...state, hashId: action.payload, isSignedIn: null};
        default:
            return state
    }
}
