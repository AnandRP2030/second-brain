export enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}
export interface ContentData {
  type: ContentType;
  title: string;
  link: string;
}
