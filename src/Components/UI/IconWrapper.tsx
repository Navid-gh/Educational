import { ReactNode, HtmlHTMLAttributes } from "react";
import { cn } from "../../utils/lib/Cn";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const IconWrapper = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-2 bg-pink cursor-pointer rounded-full shadow-main transition-all duration-300 hover:scale-105",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
