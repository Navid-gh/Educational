import { ReactNode, HtmlHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/lib/Cn";

const headerStyles = cva("text-xl max-w-fit", {
  variants: {
    intent: {
      plain: "",
      bgBlack:
        "bg-transparent text-white relative after:absolute after:inset-0 after:bg-black after:rounded-lg after:-z-10 after:-skew-x-[20deg]",
    },
    size: {
      main: ["p-2", "px-5"],
    },
    defaultVariants: {
      intent: "plain",
      size: "main",
    },
  },
});

interface headerProps
  extends VariantProps<typeof headerStyles>,
    HtmlHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const MainHeader = ({
  intent,
  size,
  children,
  className,
  ...props
}: headerProps) => {
  return (
    <h2 className={cn(headerStyles({ intent, size }), className)} {...props}>
      {children}
    </h2>
  );
};

export default MainHeader;
