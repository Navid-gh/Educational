import { ReactNode, memo } from "react";
import { cn } from "../../utils/lib/Cn";
import LeftArrow from "./Icons/LeftArrow";
import useClickActive from "../../hooks/useClickActive";

type Props = {
  head: ReactNode;
  content: ReactNode;
  bg: string;
};

const Accordion = ({ content, head, bg }: Props) => {
  const { isActive, toggleActive } = useClickActive();
  const optObj: Record<string, boolean> = {};
  optObj["max-h-[100rem] " + bg] = isActive;
  return (
    <li
      className={cn(
        "flex flex-col bg-white rounded-2xl transition-all duration-300 max-h-[3.5rem] ",
        optObj
      )}
    >
      <div
        className="flex justify-between items-center p-4 rounded-2xl shadow-main cursor-pointer h-[3.5rem] z-10"
        onClick={toggleActive}
      >
        {head}
        <span>
          <LeftArrow
            onClick={toggleActive}
            className={cn(
              "w-4 h-4 -rotate-90 transition-all duration-300 cursor-pointer",
              {
                "rotate-90": isActive,
              }
            )}
          />
        </span>
      </div>
      <div
        className={cn("p-4 opacity-0 transition-all duration-300", {
          "opacity-100": isActive,
        })}
      >
        {content}
      </div>
    </li>
  );
};

export default memo(Accordion);
