import { cn } from "../../utils/lib/Cn";
import { SideBarProps } from "../../Types/Sidebar";

const Backdrop = ({ show, func }: SideBarProps) => {
  return (
    <div
      className={cn("fixed inset-0 bg-black bg-opacity-25 z-[60] hidden", {
        block: show,
      })}
      onClick={() => func()}
    ></div>
  );
};

export default Backdrop;
