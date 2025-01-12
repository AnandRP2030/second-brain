export enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}
export interface ContentData {
  type: ContentType;
  title: string;
  link: string;
}

export interface ContentTypeFromServer {
  _id: string;
  link: string;
  type: "youtube" | "twitter" | "github" | "links" | "instagram" | "other";
  userId: {
    username: string;
  };
  title: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
