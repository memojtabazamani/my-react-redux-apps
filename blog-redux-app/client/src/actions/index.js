import {POSTS, AUTH} from "../constants";

/*
START: POSTS ACTIONS
*/

// Fetch Posts Request Action
export const fetchPostsRequest = () => {
  return {
      type: POSTS.FETCH_POSTS_REQUEST
  }
};

// Success Fetch Posts Action
export const fetchPostsSuccess = (posts) => {
  return {
      type: POSTS.FETCH_POSTS_SUCCESS,
      posts
  }
};

// Error Fetch Posts Action
export const fetchPostsError = (error) => {
    return {
        type: POSTS.FETCH_POSTS_ERROR,
        error
    }
};


// Fetch Create Post Action
export const createPostRequest = (values) => {
    return {
        type: POSTS.CREATE_POST_REQUEST,
        values
    }
};

// Create Post Success Action
export const createPostSuccess = (post) => {
  return {
      type: POSTS.CREATE_POST_SUCCESS,
      post
  }
};

// Create Post Error Action
export const createPostError = (error) => {
    return {
        type: POSTS.CREATE_POST_ERROR,
        error
    }
};

// Update Post Request
export const updatePostRequest = (values, id) => {
    return {
        type: POSTS.UPDATE_POST_REQUEST,
        values,
        id
    }
};

// Update Post Success
export const updatePostSuccess = (post) => {
    return {
        type: POSTS.UPDATE_POST_SUCCESS,
        post
    }
};

// Update Post Error
export const updatePostError = (error) => {
    return {
        type:POSTS.UPDATE_POST_ERROR,
        error
    }
};

// Delete Post Request
export const deletePostRequest = (id) => {
    return {
        type: POSTS.DELETE_POST_REQUEST,
        id
    }
};

// Delete Post Success
export const deletePostSuccess = (id) => {
    return {
        type: POSTS.DELETE_POST_SUCCESS,
        id
    }
};

// Delete Post Error
export const deletePostError = (error) => {
    return {
        type: POSTS.DELETE_POST_ERROR,
        error
    }
};

// Fetch Post Request Action
export const fetchPostRequest = (id) => {
    return {
        type: POSTS.FETCH_POST_REQUEST,
        id
    }
};

// Success Fetch Post Action
export const fetchPostSuccess = (post) => {
    return {
        type: POSTS.FETCH_POST_SUCCESS,
        post
    }
};

// Error Fetch Post Action
export const fetchPostError = (error) => {
    return {
        type: POSTS.FETCH_POST_ERROR,
        error
    }
};


/*
END: POSTS ACTIONS
*/

/*
    START: AUTH ACTIONS
*/

// SET LOGIN STATE
export const setLogin = (auth) => {
    return {
        type: AUTH.SET_LOGIN,
        auth
    }
}

/**
 * END: AUTH ACTIONS
 */