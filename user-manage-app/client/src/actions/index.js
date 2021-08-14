import {
    REGISTRION,
    LOGIN,
    LOGOUT,
    FETCH_TOKEN,
    FETCH_POSTS,
    FETCH_POST,
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,

} from './types';

import api from "../components/apis/myapi";

import history from '../components/utilities/history'; // ==> Use History For Redirect!

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
    history.push('/login'); // ==> Redirect to Login
}

// Fetch Token
export const fetchTokenUser = () => {
    const isset = window.localStorage.getItem('hashToken') ? window.localStorage.getItem('hashToken') : null;
    return {
        type: FETCH_TOKEN,
        payload: isset
    }
}

// Fetch Posts
export const fetchPosts = () => async dispatch => {
    const response = await api.get('/posts');
    dispatch({
        type: FETCH_POSTS,
        payload: response.data
    });
};


// Fetch Post
export const fetchPost = (id) => async dispatch => {
    const response = await api.get(`/posts/${id}`);
    dispatch({
        type: FETCH_POST,
        payload: response.data
    })
};

// Create Post
export const createPost = (formValues) => async (dispatch, getState) => {
    const  userId = getState().auth.hashId;
    const response = await api.post('/posts', {...formValues, userId});
    dispatch({
        type: CREATE_POST,
        payload: response.data
    });


};

// Edit Post
export const editPost = (formValues, id) => async (dispatch) => {
    const response = await api.patch(`/posts/${id}`, formValues);
    dispatch({
        type: EDIT_POST,
        payload: response.data
    });
}

// DELETE OF STREAM
export const deletePost = (id) => async dispatch => {
    await api.delete(`/posts/${id}`);
    dispatch({
        type: DELETE_POST,
        payload: id
    });
};
