import { memo } from "react";
import { Detail } from "../../Types/CourseDetail";

type Props = {
  details: Detail[];
};

const DetailsUl = ({ details }: Props) => {
  return (
    <ul className="flex flex-col gap-4">
      {details.map(({ id, key, value }) => (
        <li
          className={`flex gap-4 justify-between text-sm items-center`}
          key={id}
        >
          <span>{key}</span>
          <span className="text-[.8rem]">{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default memo(DetailsUl);
