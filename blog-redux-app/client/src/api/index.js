import myAxios from './instance';
/*
Writed My Api Functions
*/

// FETCH MY POSTS
export const fetchPosts = async () =>  {
    const response = await myAxios.get("/posts");
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

// HANDLE CREATE POST FUNCTION
export const createPost = async (values) => {
    const response = await myAxios.post("/posts",values);
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

// HANDLE UPDATE POST FUNCTION
export const editPost = async(id, values) => {
    const response = await myAxios.patch(`/posts/${id}`, values);

    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

// HANDLE DELETE POST FUNCTION
export const deletePost = async(id) => {
    const response = await myAxios.delete(`/posts/${id}`);
    const {data} = response;
    if(response.status >= 400) {
        throw new Error("Occured A Problem.");
    }

    return id;
}

// HANDLE DETAIL POST FUNCTION
export const fetchPost = async(id) => {
    const response = await myAxios.get(`/posts/${id}`);
    if(response.status >= 400) {
        throw new Error(data.errors)
    }
    const { data } = response;
    return data;
}

