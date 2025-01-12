import { UserTokenId } from "../../config/localStorageId";
import { Pages, SidebarProps } from "../../types/sidebar";
import {
  BrainIcon,
  TweetIcon,
  VideoIcon,
  DocumentIcon,
  LinkIcon,
  HashIcon,
  LogoutIcon,
} from "../icon";
import { ChatIcon } from "../icon/ChatIcon";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ changeActivePage, activePage }: SidebarProps) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(UserTokenId);
    navigate("/signin");
  };
  return (
    <div className="w-78 h-screen bg-white p-5 fixed shadow-md">
      <div className="flex space-x-3 w-full mx-auto">
        <span className="mt-1">
          <BrainIcon />
        </span>
        <h1 className="text-2xl font-semibold"> Second Brain</h1>
      </div>
      {/* sidebar items  */}
      <div className=" p-3 ">
        <SidebarItem
          active={Pages.allContents === activePage}
          onClick={() => changeActivePage(Pages.allContents)}
          icon={<DocumentIcon />}
          title="All Contents"
        />
        <SidebarItem
          active={Pages.twitter === activePage}
          onClick={() => changeActivePage(Pages.twitter)}
          icon={<TweetIcon />}
          title="Twitter"
        />
        <SidebarItem
          active={Pages.youtube === activePage}
          onClick={() => changeActivePage(Pages.youtube)}
          icon={<VideoIcon />}
          title="Youtube"
        />
        <SidebarItem
          active={Pages.chat === activePage}
          onClick={() => changeActivePage(Pages.chat)}
          icon={<ChatIcon />}
          title="Chat"
        />
        <SidebarItem
          active={Pages.links === activePage}
          onClick={() => changeActivePage(Pages.links)}
          icon={<LinkIcon />}
          title="Links"
        />
        <SidebarItem
          active={Pages.tags === activePage}
          onClick={() => changeActivePage(Pages.tags)}
          icon={<HashIcon />}
          title="Tags"
        />
        <SidebarItem
          active={false}
          onClick={logout}
          icon={<LogoutIcon />}
          title="Logout"
        />
      </div>
    </div>
  );
};
