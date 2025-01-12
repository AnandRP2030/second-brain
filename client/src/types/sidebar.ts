export enum Pages {
  allContents = "All Contents",
  twitter = "twitter",
  youtube = "youtube",
  links = "links",
  tags = "tags",
  chat = "chat"
}

export interface SidebarProps {
    changeActivePage: (value: Pages) => void,
    activePage: Pages
}
