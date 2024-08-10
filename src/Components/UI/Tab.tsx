import { ReactNode, HTMLProps, memo } from "react";
import { cn } from "../../utils/lib/Cn";
import { Link } from "react-router-dom";
import LeftArrow from "./Icons/LeftArrow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDown";

type Props = HTMLProps<HTMLLIElement> & {
  children: ReactNode;
  isActive: boolean;
  url: string;
  isDropdown?: boolean;
};

const Tab = ({ children, isActive, url, isDropdown, ...props }: Props) => {
  if (isDropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center border-0 outline-0">
          <li
            {...props}
            className={cn(
              "relative cursor-pointer font-semibold max-w-max p-1 px-2 after:absolute after:w-[65%] after:rounded-full after:bg-purple after:h-1 after:top-full after:scale-0 after:origin-right after:right-0 after:transition after:duration-500 ",
              { "after:scale-100": isActive }
            )}
          >
            {children}
          </li>
          <LeftArrow className="w-4 h-4 -rotate-90" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ direction: "rtl" }}
          className="w-56 bg-pink rounded-2xl px-4 z-[100000] "
        >
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem
              value="top"
              className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
            >
              <Link to={"/Courses/Fanbayan"}>
                آموزش تخصصی فن بیان برای تمام سنین
              </Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="bottom"
              className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
            >
              <Link to={"/Courses/PersonalDevelopment"}>
                آموزش مهارت های رشد و توسعه ی فردی
              </Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="free"
              className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
            >
              <Link
                to={
                  "/Article/66982119b81fb6d998b0308d/%D9%85%DB%8C%D9%86%DB%8C-%D8%AF%D9%88%D8%B1%D9%87"
                }
              >
                دوره رایگان
              </Link>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Link to={url} className="flex items-center">
      <li
        {...props}
        className={cn(
          "relative cursor-pointer font-semibold max-w-max p-1 px-2 after:absolute after:w-[65%] after:rounded-full after:bg-purple after:h-1 after:top-full after:scale-0 after:origin-right after:right-0 after:transition after:duration-500 ",
          { "after:scale-100": isActive }
        )}
      >
        {children}
      </li>
    </Link>
  );
};

export default memo(Tab);
