import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/lib/Cn";

const InputStyles = cva(
  "border-0 outline-0 bg-lowPink shadow-coursePink rounded-xl resize-none p-4 outline-none transition-all duration-300 focus:bg-white focus:border focus:border-pink font-body",
  {
    variants: {
      intent: {
        primary: "bg-lowPink",
      },
      inputSize: {
        base: ["w-full", "p-4"],
      },
      defaultVariants: {
        intent: "primary",
        inputSize: "base",
      },
    },
  }
);

interface InputProps
  extends VariantProps<typeof InputStyles>,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeHolder?: string;
  label?: string;
}

const MainTextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ intent, placeHolder, inputSize, id, label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2">
        {placeHolder ? null : <label htmlFor={id}>{label}</label>}
        <textarea
          id={id}
          className={cn(InputStyles({ intent, inputSize }), className)}
          placeholder={placeHolder}
          ref={ref}
          {...props}
        ></textarea>
      </div>
    );
  }
);

export default MainTextArea;
