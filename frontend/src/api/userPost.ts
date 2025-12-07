import axios from "axios";
import { getToken } from "../utils/cookieHelper";

const API = axios.create({
    baseURL: "http://localhost:5000/api/posts",
    headers: { "Content-Type": "multipart/form-data" },

});

// 🧠 Add token to every request automatically
API.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ✅ Create new community
export const createUserPost = (data: any) => API.post("/", data);

// 📜 Get all posts
export const getAllPosts = () => API.get("/");

// 👤 Get posts by a specific user
export const getUserPosts = (userId: string) => API.get(`/user/${userId}`);



// ✏️ Update a post (supports multiple images)
export const updatePost = (postId: string, data: any) =>
    API.put(`/${postId}`, data);

// 🗑️ Delete a post
export const deletePost = (postId: string) => API.delete(`/${postId}`);

export const toggleLike = (postId: string) =>
    API.put(`/${postId}/like`);

export const addComment = (postId: string, text: string) =>
    API.post(`/${postId}/comment`, { text });

export const deleteComment = (postId: string, commentId: string) =>
    API.delete(`/${postId}/comment/${commentId}`);


export const sharePost = (postId: string) =>
    API.post(`/${postId}/share`);

export const deleteAllPosts = () =>
    API.delete(`/delete-all`);



