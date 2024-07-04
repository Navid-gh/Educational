import { ReactNode } from "react";
import TextSide from "./Icons/TextSide";

type Props = {
  children: ReactNode;
  fontSize?: string;
};

const HeadTitle = ({ children, fontSize = "3xl" }: Props) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="w-14 h-14 tips2:w-8 tips2:h-8">
        <TextSide className="w-full h-full" />
      </div>
      <h1
        className={`font-bold text-black text-2xl text-center tips:text-lg tips2:text-[0.9rem]`}
        style={{ fontSize: fontSize }}
      >
        {children}
      </h1>
      <div className="w-14 h-14 tips2:w-8 tips2:h-8">
        <TextSide className="rotate-180 w-full h-full" />
      </div>
    </div>
  );
};

export default HeadTitle;
