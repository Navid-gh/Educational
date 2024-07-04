import { memo } from "react";
import { tabs } from "../Items/navbarTabs";
import useCurrentUrlTab from "../hooks/useCurrentUrlTab";
import useCurrentTab from "../hooks/useCurrentTab";
import IconWrapper from "./UI/IconWrapper";
import Close from "./UI/Icons/Close";
import SearchInput from "./UI/SearchInput";
import Tab from "./UI/Tab";
import { cn } from "../utils/lib/Cn";
import Backdrop from "./UI/Backdrop";
import { SideBarProps } from "../Types/Sidebar";

const Sidebar = ({ show, func }: SideBarProps) => {
  const currentTabIndex = useCurrentUrlTab(tabs);
  const { activeTab, handleMouseEnter, handleMouseLeave } =
    useCurrentTab(currentTabIndex);
  return (
    <>
      <aside
        className={cn(
          "flex flex-col gap-6 fixed top-0 right-0 bottom-8 p-6 bg-pink z-[70] rounded-xl rounded-r-none transition-all duration-300 opacity-0 translate-x-full",
          { "opacity-100 translate-x-0": show }
        )}
      >
        <div className="flex items-center gap-5">
          <SearchInput type="sidebar" />
          <IconWrapper
            className="bg-black bg-opacity-30"
            onClick={() => func()}
          >
            <Close className="w-4 h-4 fill-pink" />
          </IconWrapper>
        </div>
        <nav>
          <ul className="flex flex-col gap-4">
            {tabs.map((tab, idx) => (
              <Tab
                isActive={idx === activeTab || idx === currentTabIndex}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                key={tab.id}
                url={tab.url}
                isDropdown={tab.isDropdown ? true : false}
              >
                {tab.name}
              </Tab>
            ))}
          </ul>
        </nav>
      </aside>
      <Backdrop {...{ show, func }} />
    </>
  );
};

export default memo(Sidebar);
