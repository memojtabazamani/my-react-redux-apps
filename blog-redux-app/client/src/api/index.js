import myAxios from './index';
/*
Writed My Api Functions
*/

// FETCH MY POSTS
export const fetchPosts = async () =>  {
    const response = await axios.get("/posts");
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

// HANDLE CREATE POST FUNCTION
export const createPost = async (values) => {
    const response = await axios.post("/posts",values);
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

// HANDLE UPDATE POST FUNCTION
export const editPost = async(id, values) => {
    const response = await axios.patch(`/post/${id}`, values);

    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

// HANDLE DELETE POST FUNCTION
export const deletePost = async(id) => {
    const response = await axios.delete(`/post/${id}`);
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    const {data} = response;
    return data;
}

// HANDLE DETAIL POST FUNCTION
export const detailPost = async(id) => {
    const response = await axios.get(`/post/${id}`);
    if(response.status >= 400) {
        throw new Error(data.errors)
    }
    const { data } = response;
    return data;
}