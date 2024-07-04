import { ReactNode, memo } from "react";
import { cn } from "../../utils/lib/Cn";

type Props = {
  isActive: boolean;
  children: ReactNode;
};

const Modal = ({ isActive, children }: Props) => {
  return (
    <div
      className={cn(
        "fixed z-[75] right-[50%] top-[25%] min-w-[31rem] tips2:min-w-[24rem] translate-x-[50%] w-[50%] overflow-auto max-h-[70%] scroll-y bg-black rounded-2xl p-7 tips2:px-2 transition-all duration-300 opacity-0 -translate-y-[200%]",
        { "translate-y-0 opacity-100": isActive }
      )}
    >
      {children}
    </div>
  );
};

export default memo(Modal);
