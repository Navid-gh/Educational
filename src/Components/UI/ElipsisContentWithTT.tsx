import { useRef } from "react";
import { cn } from "../../utils/lib/Cn";
import toast from "react-hot-toast";
import Copy from "./Icons/Copy";

type Props = {
  text: string | undefined;
};

const ElipsisContentWithTT = ({ text }: Props) => {
  const contentRef = useRef<HTMLInputElement>(null);
  const handleCopyContent = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      toast.success("لایسنس کپی شد");
      return navigator.clipboard.writeText(text!);
    }
    contentRef.current?.select;
    document.execCommand("copy");
    toast.success("لایسنس کپی شد");
  };
  return (
    <div className="relative flex items-center gap-1">
      <p className="max-w-[8rem] overflow-ellipsis overflow-hidden">{text}</p>
      <p
        className="cursor-pointer transition-all duration-300 hover:-translate-x-2 flex items-center gap-1"
        onClick={handleCopyContent}
      >
        <Copy className="w-4 h-4" />
        <span>(کپی کردن)</span>
      </p>
      <div className={cn("absolute top-full hidden")}>
        <p>{text}</p>
        <input type="hidden" ref={contentRef} />
      </div>
    </div>
  );
};

export default ElipsisContentWithTT;
