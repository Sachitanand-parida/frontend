
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/post'
});

export const getPosts = () => API.get('/all');
export const getPost = (id) => API.get(`/${id}`);
export const createPost = (post) => API.post(`/`, post);
export const updatePost = (id, post) => API.put(`/${id}`, post);
export const deletePost = (id) => API.delete(`/${id}`);