import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  header: string;
};

const CourseDetails = ({ children, header }: Props) => {
  return (
    <div className="w-full flex flex-col bg-pink gap-6 bg-opacity-50 rounded-3xl self-start p-4 px-6 shadow-coursePink">
      <h2 className="font-bold border-b-2 border-pink py-4 pt-1">{header}</h2>
      {children}
    </div>
  );
};

export default memo(CourseDetails);
