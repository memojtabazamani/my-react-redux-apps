import { put, call, takeEvery } from 'redux-saga/effects';

import { 
    fetchPostsSuccess, fetchPostsError, 
    createPostSuccess, createPostError,
    updatePostSuccess, updatePostError,
    deletePostSuccess, deletePostError,
    fetchPostSuccess, fetchPostError } from '../actions';

import { POSTS } from '../constants';
import { fetchPosts, createPost, editPost, deletePost, fetchPost } from '../api';

export function* handlePostsSaga() {
    try {
        const posts = yield call(fetchPosts); // Fetch From API
        // images = images.splice(10);
        yield put(fetchPostsSuccess(posts)); // Call Another Action use PUT
    } catch (error) {
        yield put(fetchPostsError(error.toString()));
    }
}

export function* handlePostSaga(action) {
    try {
        const post = yield call(fetchPost, action.id);
        yield put(fetchPostSuccess(post)); // Call Another Action use PUT
    } catch(error) {
        console.log(error);
        yield put(fetchPostError(error.toString()));
    }
}

/*
This function handle when need to create post!
*/
export function* handleCreatePostSaga(action) {

    try{
        const post = yield call(createPost, action.values);
        yield put(createPostSuccess(post));
    } catch(error) {
        console.log(error);
        yield put(createPostError(error.toString()));
    }
}

/*
This function handle when need to update post!
*/
export function* handleEditPostSaga(action) {
    try {
        const updatePost = yield call(editPost, action.id, action.values);
        yield put(updatePostSuccess(updatePost));
    } catch (error) {
        console.log(error);
        yield put(updatePostError(error.toString()));
    }
}

/*
This function handle when need to delete post !
*/
export function* handleDeletePostSaga(action) {
    try {
        const postId = yield call(deletePost, action.id);
        yield put(deletePostSuccess(postId));
    } catch (error) {
        console.log(error);
        yield put(deletePostError(error.toString()));
    }
}



export default function* watchPostsLoad() { // Handle Of Fetch Images
    yield takeEvery(POSTS.FETCH_POSTS_REQUEST, handlePostsSaga);
    yield takeEvery(POSTS.FETCH_POST_REQUEST , handlePostSaga);
    yield takeEvery(POSTS.CREATE_POST_REQUEST, handleCreatePostSaga);
    yield takeEvery(POSTS.DELETE_POST_REQUEST, handleDeletePostSaga);
    yield takeEvery(POSTS.UPDATE_POST_REQUEST, handleEditPostSaga);
}