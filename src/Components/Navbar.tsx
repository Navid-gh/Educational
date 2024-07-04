import { useState } from "react";
import LogoIcon from "./UI/Icons/Logo";
import SearchInput from "./UI/SearchInput";
import { Link } from "react-router-dom";
import MainButton from "./UI/MainButton";
import Tab from "./UI/Tab";
import BuyComp from "./UI/BuyComp";
import Hamburger from "./UI/Icons/Hamburger";
import User from "./UI/Icons/User";
import { tabs } from "../Items/navbarTabs";
import useCurrentUrlTab from "../hooks/useCurrentUrlTab";
import useCurrentTab from "../hooks/useCurrentTab";
import IconWrapper from "./UI/IconWrapper";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { cn } from "../utils/lib/Cn";
import { useAppSelector } from "../hooks/useReduxHooks";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const currentTabIndex = useCurrentUrlTab(tabs);
  const { activeTab, handleMouseEnter, handleMouseLeave } =
    useCurrentTab(currentTabIndex);

  const [sideBar, setSideBar] = useState<boolean>(false);

  const { Auth, role } = useAuth();
  const { products } = useAppSelector((state) => state.basket);

  const { pathname } = useLocation();
  let isSticky = true;
  let hidden = false;
  if (pathname.includes("Course")) {
    isSticky = false;
  } else if (pathname.includes("Book")) {
    isSticky = false;
  } else if (pathname.includes("Article")) {
    isSticky = false;
  } else if (pathname.includes("Login")) {
    hidden = true;
  }

  return (
    <header
      className={cn(
        "flex flex-col gap-3 bg-white sticky top-0 p-[.5em] z-50 shadow-main",
        { static: !isSticky, hidden }
      )}
    >
      <div className="flex justify-between h-7 items-center navbar:h-auto">
        <div className="flex items-center gap-4">
          <Hamburger
            className="w-8 h-8 hidden navbar:block cursor-pointer"
            onClick={() => setSideBar((prev) => !prev)}
          />
          <Link to="/">
            <LogoIcon
              id="logo-svg"
              className="w-8 h-8 rounded-lg overflow-hidden"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="navbar:hidden">
            <SearchInput type="navbar" />
          </div>
          <Link to="Basket">
            {Auth ? (
              <BuyComp intent="navbar" size="small" qty={products?.length} />
            ) : (
              <BuyComp intent="navbar" size="small" />
            )}
          </Link>
          {Auth ? (
            role === "USER" ? (
              <>
                <Link to="User" className="hidden navbar:block">
                  <IconWrapper className="relative">
                    <User className=" w-4 h-4" />
                  </IconWrapper>
                </Link>
                <Link to="User" className="navbar:hidden">
                  <MainButton
                    intent="primary"
                    text="پنل کاربری"
                    size="small"
                    className="px-5"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to="Admin" className="hidden navbar:block">
                  <IconWrapper className="relative">
                    <User className=" w-4 h-4" />
                  </IconWrapper>
                </Link>
                <Link to="Admin" className="navbar:hidden">
                  <MainButton
                    intent="primary"
                    text="پنل ادمین"
                    size="small"
                    className="px-3"
                  />
                </Link>
              </>
            )
          ) : (
            <>
              <Link to="Login" className="hidden navbar:block">
                <IconWrapper>
                  <User className=" w-4 h-4" />
                </IconWrapper>
              </Link>
              <Link to="Login" className="navbar:hidden">
                <MainButton intent="primary" text="ورود/ثبت نام" size="small" />
              </Link>
            </>
          )}
        </div>
      </div>
      <nav className="navbar:hidden">
        <ul className="flex gap-4 items-center">
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
      <Sidebar show={sideBar} func={() => setSideBar((prev) => !prev)} />
    </header>
  );
};

export default Navbar;
