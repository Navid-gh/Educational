import { ReactNode, memo } from "react";
import IconWrapper from "./IconWrapper";
import { usePersianNums } from "../../hooks/usePersianNums";
import { Link } from "react-router-dom";

type Props = {
  icon: ReactNode;
  title: string;
  value: string | number;
  link?: string;
};

const SummaryBoxes = ({ icon, title, value, link }: Props) => {
  link = link ? link : "";
  return (
    <div className="text-white bg-purple p-3 mb-2 flex-1 min-w-[9rem] max-w-[10rem] rounded-xl shadow-userTopBoxes">
      <Link to={link} className="flex flex-col gap-2">
        <span className="self-end">{title}</span>
        <div className="flex justify-between items-center">
          <IconWrapper className="bg-white rounded-lg p-2 fill-purple hover:scale-100 cursor-default">
            {icon}
          </IconWrapper>
          <span>{usePersianNums(value)}</span>
        </div>
      </Link>
    </div>
  );
};

export default memo(SummaryBoxes);
