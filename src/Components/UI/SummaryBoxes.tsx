import { ReactNode, memo } from "react";
import IconWrapper from "./IconWrapper";
import { usePersianNums } from "../../hooks/usePersianNums";

type Props = {
  icon: ReactNode;
  title: string;
  value: string | number;
};

const SummaryBoxes = ({ icon, title, value }: Props) => {
  return (
    <div className="flex flex-col gap-2 text-white bg-purple p-3 mb-2 flex-1 navbar:flex-[49%] navbar:max-w-[49%] tips2:flex-[99%] tips2:max-w-[99%] rounded-xl shadow-userTopBoxes">
      <span className="self-end">{title}</span>
      <div className="flex justify-between items-center">
        <IconWrapper className="bg-white rounded-lg p-2 fill-purple hover:scale-100 cursor-default">
          {icon}
        </IconWrapper>
        <span>{usePersianNums(value)}</span>
      </div>
    </div>
  );
};

export default memo(SummaryBoxes);
