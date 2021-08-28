import axios from './instance'

export const fetchPosts = async () => {
    const response = await axios.get("/posts");
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}

export const fetchPost = async(id) => {
    const response = await axios.get(`/posts/${id}`);
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    const { data } = response;
    return data;
}