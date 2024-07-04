import { MouseEvent, memo } from "react";
import { courseNavItems } from "../Items/courseNav";
import { bookNavItems } from "../Items/bookNav";
import useCurrentTab from "../hooks/useCurrentTab";
import { cn } from "../utils/lib/Cn";

type Props = {
  siwtchHandler: (id: string) => void;
  type: "course" | "book";
};

const CourseNav = ({ siwtchHandler, type }: Props) => {
  const { activeTab, handleMouseEnter, handleMouseLeave } = useCurrentTab();

  const handleSwitch = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    siwtchHandler(id);
  };

  const items = type === "course" ? courseNavItems : bookNavItems;
  return (
    <nav className="sticky top-0 z-50 shadow-main overflow-x-auto scroll-x">
      <ul className="flex gap-7 bg-pink px-4 pt-4 min-w-[42.5rem]">
        {items.map(({ id, link, name }, idx) => {
          const isActive = idx === activeTab;
          return (
            <li
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              key={id}
              className={cn(
                "rounded-tr-xl rounded-tl-xl transition-all duration-300 text-sm",
                {
                  "bg-white": isActive,
                }
              )}
            >
              <a
                className="no-underline text-inherit w-full h-full block p-2 pb-5"
                href={"#" + link}
                onClick={(e) => handleSwitch(e, link)}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(CourseNav);
