import { UserTokenId } from "../config/localStorageId";
import { ContentData, ContentTypeFromServer } from "../types/content";
import { axiosInstance } from "./axiosInstance";

export const postContent = async (data: ContentData) => {
  console.log("data =>> ", data);
  const res = await axiosInstance.post("/content", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(UserTokenId)}`,
    },
  });
  return res.data;
};

export const getUserContents = async () => {
  const res = await axiosInstance.get(`/content/user/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(UserTokenId)}`,
    },
  });
  return res.data.data || [];
};
export const getSharedContents = async (
  id: string
): Promise<ContentTypeFromServer[]> => {
  const res = await axiosInstance.get(`/link-share/${id}`);
  
  return res.data.data.contents;
};


export const deleteUserContent = async (id) => {
  const res = await axiosInstance.delete(`/content/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(UserTokenId)}`,
    },
  });
  return res.data;
};

export const createSharableLink = async () => {
  const res = await axiosInstance.post(
    "/link-share",
    { share: true },
    {
      headers: {
        Authorization: localStorage.getItem(UserTokenId),
      },
    }
  );
  return res.data;
};
