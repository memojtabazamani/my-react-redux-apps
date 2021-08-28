import { put, call, takeEvery } from 'redux-saga/effects';

import { setPosts, setError, setErrorPost, setPost } from '../actions';
import { POSTS } from '../mytypes';
import { fetchPost, fetchPosts } from '../api';

export function* handlePostsSaga() {
    try {
        const posts = yield call(fetchPosts); // Fetch From API
        // images = images.splice(10);
        yield put(setPosts(posts)); // Call Another Action use PUT
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export function* handlePostSaga(action) {
    try {
        const post = yield call(fetchPost, action.id);
        yield put(setPost(post)); // Call Another Action use PUT
    } catch(error) {
        console.log(error);
        yield put(setErrorPost(error.toString()));
    }
}

export default function* watchPostsLoad() { // Handle Of Fetch Images
    yield takeEvery(POSTS.POSTS_FETCH_REQUESTED, handlePostsSaga);
    yield takeEvery(POSTS.POST_FETCH_REQUESTED, handlePostSaga);
}