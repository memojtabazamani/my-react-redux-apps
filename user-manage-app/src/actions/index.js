import { REGISTRION, LOGIN } from './types';


// This action use for register 
export const registerUser = (hash) => {
    return {
        type: REGISTRION,
        payload: hash
    }
}

// This action use for login
export const loginUser = (hash) => {
    return {
        type: LOGIN,
        payload: hash
    }
}
