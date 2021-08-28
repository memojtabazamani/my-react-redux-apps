import { POSTS, LIKE } from '../mytypes';

export const postsFetchRequested = () => {
    return {
        type: POSTS.POSTS_FETCH_REQUESTED,
    }
}


export const setPosts = (posts) => {
    return {
        type: POSTS.POSTS_FETCH_SUCCESS,
        posts
    }
}

export const setError = (error) => {
    return {
        type: POSTS.POSTS_FETCH_FAILD,
        error
    }
}


export const postFetchRequested = (id) => {
    return {
        type: POSTS.POST_FETCH_REQUESTED,
        id
    }
}

export const setCurrentIdPost = (id) => {
    return {
        type: POSTS.POST_SET_CURRENT_ID,
        id
    }
}

export const setPost = (post) => {
    return {
        type: POSTS.POST_FECTH_SUCCESS,
        post
    }
}

export const setErrorPost = (error) => {
    return {
        type: POSTS.POST_FETCH_FAILD
    }
}