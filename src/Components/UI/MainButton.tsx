import { cva, VariantProps } from "class-variance-authority";
import { memo, ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/lib/Cn";

const buttonStyles = cva(
  "text-center max-w-fit rounded-full text-black font-sm shadow-main transition-all duration-300 hover:scale-105 tips2:px-2 tips2-text-sm",
  {
    variants: {
      intent: {
        primary: "bg-pink",
        white: "bg-white text-black border border-black",
        black: "bg-black text-white",
        purple: "bg-purple text-white",
      },
      size: {
        small: ["py-2", "px-8", "max-w-[8.125rem]", "text-xs"],
        medium: ["py-2", "px-10", "text-base"],
        card: ["py-2", "px-8", "w-full", "max-w-full", "text-sm"],
        login: ["p-4", "w-full", "max-w-full", "text-sm"],
      },
      defaultVariants: {
        intent: "primary",
        size: "small",
      },
    },
  }
);

interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const MainButton = ({
  intent,
  text,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ intent, size }), className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default memo(MainButton);
