import { ReactNode } from "react";
import { cn } from "../../utils/lib/Cn";

type Props = {
  img: ReactNode;
  title: string;
  text: string;
  link?: string;
  onClick?: () => void;
};

const Tip = ({ img, title, text, link, onClick }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 flex-1 items-center tips:flex-[50%] tips2:flex-[100%]",
        { "cursor-pointer": onClick }
      )}
      onClick={onClick}
    >
      {link ? (
        <>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-20 h-20">{img}</div>
          </a>
          <span className="font-semibold tips2:text-[0.9rem]">{title}</span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <p className="text-[.85rem] leading-5 max-w-[10rem] text-center">
              {text}
            </p>
          </a>
        </>
      ) : (
        <>
          <div className="w-20 h-20">{img}</div>
          <span className="font-semibold tips2:text-[0.9rem]">{title}</span>
          <p className="text-[.85rem] leading-5 max-w-[10rem] text-center">
            {text}
          </p>
        </>
      )}
    </div>
  );
};

export default Tip;
