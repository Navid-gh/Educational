import Buy from "./Icons/Buy";
import { cva, VariantProps } from "class-variance-authority";
import { memo } from "react";
import { cn } from "../../utils/lib/Cn";
import { usePersianNums } from "../../hooks/usePersianNums";

const BuyStyles = cva(
  "cursor-pointer flex items-center justify-center rounded-full shadow-main transition-all duration-300 hover:scale-105 relative",
  {
    variants: {
      intent: {
        white: "bg-white",
        black: "bg-black",
        navbar: "bg-pink",
      },
      size: {
        small: ["p-2"],
        medium: ["p-4"],
      },
      defaultVariants: {
        intent: "navbar",
        size: "small",
      },
    },
  }
);

interface BuyProps extends VariantProps<typeof BuyStyles> {
  qty?: number;
  onClick?: () => void;
}

const BuyComp = ({ qty, intent, size, onClick, ...props }: BuyProps) => {
  return (
    <div className={BuyStyles({ intent, size })} {...props} onClick={onClick}>
      {qty && qty > 0 ? (
        <div className="flex justify-center items-center absolute -left-1 -top-1 bg-purple rounded-full w-4 h-4">
          <span className="text-white text-xs">{usePersianNums(qty)}</span>
        </div>
      ) : null}
      <Buy className={cn("w-4 h-4", { "fill-white": intent === "black" })} />
    </div>
  );
};

export default memo(BuyComp);
