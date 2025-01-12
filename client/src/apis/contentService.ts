import { UserTokenId } from "../config/localStorageId";
import { ContentData } from "../types/content";
import { axiosInstance } from "./axiosInstance"

export const postContent = async (data: ContentData) => {
    console.log('data =>> ', data)
    const res = await axiosInstance.post('/content', data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(UserTokenId)}`
        }
    });
    return res.data;
}

export const getUserContents = async () => {
    const res = await axiosInstance.get(`/content/user/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(UserTokenId)}`
        }
    });
    return res.data.data || [];
}