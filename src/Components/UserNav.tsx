import Avatar from "./UI/Icons/Avatar";
import { userNavItems } from "../Items/userNav";
import { NavLink, useNavigate } from "react-router-dom";
import useClickActive from "../hooks/useClickActive";
import IconWrapper from "./UI/IconWrapper";
import Plus from "./UI/Icons/Plus";
import useCurrentTab from "../hooks/useCurrentTab";
import { cn } from "../utils/lib/Cn";
import LeftArrow from "./UI/Icons/LeftArrow";
import Info from "./UI/Icons/Info";
import Order from "./UI/Icons/Order";
import Exit from "./UI/Icons/Exit";
import Home from "./UI/Icons/Home";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { logOut } from "../redux/user/userSlice";
import useCookie from "../hooks/useCookie";
import useAuth from "../hooks/useAuth";

const UserNav = () => {
  const { isActive, toggleActive } = useClickActive();
  const { activeTab, handleMouseEnter, handleMouseLeave } = useCurrentTab();
  const { removeCookie } = useCookie("sbr_token");
  const { data } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    removeCookie("sbr_token");
    navigate("/");
  };
  return (
    <nav className="flex-[25%] userSummary:flex-[100%] userSummary:self-auto max-w-[15.625rem] flex flex-col gap-4 py-8 pb-16 shadow-userSidebar rounded-tl-xl rounded-bl-xl self-start">
      <div className="flex flex-col gap-3 self-center">
        <IconWrapper className="p-4 bg-pink w-24 h-24 cursor-default hover:scale-100">
          <Avatar className="fill-white" />
        </IconWrapper>
        <span className="self-center">{`${data.first_name} ${data.last_name}`}</span>
      </div>
      <ul>
        {userNavItems.map(({ id, name, arr, link }, idx) => {
          if (arr) {
            return (
              <li
                key={id}
                className={cn(
                  " border border-pink overflow-hidden max-h-[3.125rem] text-lowBlack transition-all duration-300",
                  {
                    "max-h-[1000px] bg-[white]": isActive,
                  }
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-between h-[3.125rem] px-5 cursor-pointer transition-all duration-300",
                    {
                      "bg-lowPurple  text-purple": idx === activeTab,
                    }
                  )}
                  onClick={toggleActive}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-2">
                    <Order
                      className={cn("w-4 h-4", {
                        "fill-purple": idx === activeTab,
                      })}
                    />
                    <span className="">{name}</span>
                  </div>
                  {isActive ? (
                    "-"
                  ) : (
                    <Plus
                      className={cn("w-4 h-4", {
                        "fill-purple": idx === activeTab,
                      })}
                    />
                  )}
                </div>
                <ul className="flex flex-col gap-2 py-3">
                  {arr.map(({ _id, _link, _name }) => (
                    <li
                      key={_id}
                      className="transition-all duration-300 hover:-translate-x-1"
                    >
                      <NavLink
                        to={_link}
                        className="flex items-center gap-3 pr-6"
                        end
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "white" : "",
                            fontWeight: isActive ? "bold" : "",
                          };
                        }}
                      >
                        <LeftArrow className="w-2 h-2" />
                        <span>{_name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          if (link === "Logout") {
            return (
              <li
                key={id}
                className={cn(
                  " border border-pink h-[3.125rem] flex items-center gap-2 px-5 cursor-pointer text-lowBlack transition-all duration-300",
                  {
                    "bg-lowPurple  text-purple": idx === activeTab,
                  }
                )}
                onClick={handleLogout}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <Exit
                  className={cn("w-4 h-4", {
                    "fill-purple": idx === activeTab,
                  })}
                />
                <span>{name}</span>
              </li>
            );
          }
          return (
            <li
              key={id}
              className={cn(
                "border border-pink h-[3.125rem] text-lowBlack transition-all duration-300",
                {
                  "bg-lowPurple  text-purple fill-purple": idx === activeTab,
                }
              )}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={link}
                className="flex items-center gap-2 w-full h-full px-5 transition-all duration-300"
                end
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                {link === "" ? (
                  <Home
                    className={cn("w-4 h-4", {
                      "fill-purple": idx === activeTab,
                    })}
                  />
                ) : (
                  <Info
                    className={cn("w-4 h-4", {
                      "fill-purple": idx === activeTab,
                    })}
                  />
                )}
                <span>{name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UserNav;
