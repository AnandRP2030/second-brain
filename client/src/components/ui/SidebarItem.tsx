import { ReactElement } from "react";

interface SidebarProps {
  icon: ReactElement;
  title: string;
}
export const SidebarItem = ({ icon, title }: SidebarProps) => {
  return (
    <div className="flex transition-all duration-300 space-x-4 mt-5 bg-purple-200 py-2 px-3 hover:bg-purple-100 hover:shadow-md cursor-pointer rounded-md">
      <span>{icon}</span>
      <h2 className="hover:font-medium">{title}</h2>
    </div>
  );
};
