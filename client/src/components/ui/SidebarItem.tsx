import { ReactElement } from "react";

interface SidebarProps {
  icon: ReactElement;
  title: string;
}
export const SidebarItem = ({ icon, title }: SidebarProps) => {
  return (
    <div className="flex space-x-4 mt-5">
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};
