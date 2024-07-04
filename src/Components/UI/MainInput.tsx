import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../utils/lib/Cn";

const InputStyles = cva("border-0 outline-0 rounded-full font-body", {
  variants: {
    intent: {
      primary: "bg-pink",
      white: "bg-white text-black",
      login:
        "text-black bg-lowPink focus:bg-white focus:border focus:border-lowPink focus:border-2 transition-all duration-300",
    },
    inputSize: {
      base: ["w-full", "p-4"],
      small: ["py-2", "px-8", "max-w-[8.125rem]", "text-xs"],
      medium: ["py-2", "px-10", "text-base"],
      editUser: ["h-10 w-full p-4 py-2"],
    },
    defaultVariants: {
      intent: "primary",
      inputSize: "small",
    },
  },
});

interface InputProps
  extends VariantProps<typeof InputStyles>,
    InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  label?: string;
}

const MainInput = forwardRef<HTMLInputElement, InputProps>(
  ({ intent, placeHolder, inputSize, id, label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2">
        {placeHolder ? null : <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          className={cn(InputStyles({ intent, inputSize }), className)}
          placeholder={placeHolder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default MainInput;
