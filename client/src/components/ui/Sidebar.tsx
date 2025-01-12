import { UserTokenId } from "../../config/localStorageId";
import {
  BrainIcon,
  TweetIcon,
  VideoIcon,
  DocumentIcon,
  LinkIcon,
  HashIcon,
  LogoutIcon,
} from "../icon";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(UserTokenId)
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
        <SidebarItem icon={<TweetIcon />} title="Tweets" />
        <SidebarItem icon={<VideoIcon />} title="Videos" />
        <SidebarItem icon={<DocumentIcon />} title="Documents" />
        <SidebarItem icon={<LinkIcon />} title="Links" />
        <SidebarItem icon={<HashIcon />} title="Tags" />
        <SidebarItem onClick={logout} icon={<LogoutIcon />} title="Logout" />
      </div>
    </div>
  );
};
