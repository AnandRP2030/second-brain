import { ReactElement } from "react";

interface SidebarProps {
  icon: ReactElement;
  title: string;
  active: boolean;
  onClick?: () => void;
}
export const SidebarItem = (props: SidebarProps) => {
  const { icon, title, onClick, active = false } = props;

  return (
    <div
      className={`${active ? 'bg-royalBlue-300 ': 'bg-purple-200'} flex transition-all duration-300 space-x-4 mt-5 py-2 px-3 hover:bg-purple-100 hover:shadow-md cursor-pointer rounded-md`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <h2 className="hover:font-medium">{title}</h2>
    </div>
  );
};
