import { REGISTRION, LOGIN, LOGOUT, FETCH_TOKEN } from './types';


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

// This action log out user from account!
export const logOutUser = () => {
    return {
        type: LOGOUT
    }
}

// Fetch Token
export const fetchTokenUser = () => {
    const isset = window.localStorage.getItem('hashToken') ? window.localStorage.getItem('hashToken') : null;
    return {
        type: FETCH_TOKEN,
        payload: isset
    }
}
