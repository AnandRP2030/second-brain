import { useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { MainSection } from "./viewContents";
import { Pages } from "../types/sidebar";

export const Dashboard = () => {
  const [activePage, setActivePage] = useState<Pages>(Pages.allContents);
  const changeActivePage = (value: Pages) => {
    setActivePage(value);
  };
  return (
    <>
      <div className="flex ">
        <div className="flex-shrink-0">
          <Sidebar
            activePage={activePage}
            changeActivePage={changeActivePage}
          />
        </div>

        <div>
          {activePage === Pages.allContents && (
            <MainSection pageContent={Pages.allContents} />
          )}
          {activePage === Pages.twitter && (
            <MainSection pageContent={Pages.twitter} />
          )}
          {activePage === Pages.youtube && (
            <MainSection pageContent={Pages.youtube} />
          )}
        </div>
      </div>
    </>
  );
};
