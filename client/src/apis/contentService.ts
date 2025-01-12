import { UserTokenId } from "../config/localStorageId";
import { ContentData } from "../types/content";
import { axiosInstance } from "./axiosInstance"

export const postContent = async (data: ContentData) => {
    const res = await axiosInstance.post('/content', data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(UserTokenId)}`
        }
    });
    return res.data;
}