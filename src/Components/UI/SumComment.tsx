import { memo, useState } from "react";
import { cn } from "../../utils/lib/Cn";
import Avatar from "./Icons/Avatar";
import moment from "moment-jalaali";
import { View } from "../../Types/apiTypes";
import { Comment } from "../../Types/apiTypes";
import { usePersianNums } from "../../hooks/usePersianNums";

type Props =
  | {
      type: "comment";
      data: Comment;
      wordLimit: number;
      full?: boolean;
      theme: "girl" | "boy";
    }
  | {
      type: "view";
      data: Omit<View, "_id" | "__v">;
      wordLimit: number;
      full?: boolean;
      theme: "girl" | "boy";
    };

const SumComment = ({ type, data, theme, wordLimit, full }: Props) => {
  const [showFull, setShowFull] = useState(false);
  if (type === "comment") {
    if (!data.show) return;
    return (
      <div
        className={cn(
          `flex-[48%] max-w-[48%] tips:flex-[100%] tips:max-w-[100%] flex flex-col gap-4 rounded-3xl self-start min-h-[16.75rem] ${
            theme === "girl" ? "shadow-girlShadow" : "shadow-boyShadow"
          } p-6 `,
          { "flex-[100%] max-w-full min-h-0": full }
        )}
      >
        <div className="flex gap-3 items-center">
          <Avatar className="w-14 h-14" />
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between">
              <span className="text-lg font-bold">
                {data.user.first_name + "" + data.user.last_name}
              </span>
              <span className="text-sm opacity-75">
                {usePersianNums(
                  moment(data.createdAt).format("jYYYY/jMM/jDD HH:mm:ss")
                )}
              </span>
            </div>
          </div>
        </div>
        {data.comment.split("").length >= wordLimit ? (
          <>
            <p
              className={`transition-all duration-300 overflow-hidden w-full ${
                showFull ? "max-h-[1000px]" : "max-h-[70px]"
              }`}
            >
              {data.comment}
            </p>
            <span
              className="inline cursor-pointer text-purple"
              onClick={() => setShowFull((prev) => !prev)}
            >
              {showFull ? "کمتر" : "بیشتر"}
            </span>
          </>
        ) : (
          <p>{data.comment}</p>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={cn(
          `flex-[48%] max-w-[48%] tips:flex-[100%] tips:max-w-[100%] flex flex-col gap-4 rounded-3xl self-start min-h-[16.75rem] ${
            theme === "girl" ? "shadow-girlShadow" : "shadow-boyShadow"
          } p-6 `,
          { "flex-[100%] max-w-full min-h-0": full }
        )}
      >
        <div className="flex gap-3 items-center">
          <Avatar className="w-14 h-14" />
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between">
              <span className="text-lg font-bold">{data.nameUser}</span>
              <span className="text-sm opacity-75">
                {usePersianNums(
                  moment(data.createdAt).format("jYYYY/jMM/jDD HH:mm:ss")
                )}
              </span>
            </div>
            <span
              className={`px-4 py-[2px] w-fit rounded-xl shadow-main tips2:text-xs ${
                theme === "girl" ? "bg-pink" : "bg-yellow"
              }`}
            >
              هنرجو {data.nameCourse}
            </span>
          </div>
        </div>
        {data.description.split("").length >= wordLimit ? (
          <>
            <p
              className={`transition-all duration-300 overflow-hidden w-full ${
                showFull ? "max-h-[1000px]" : "max-h-[70px]"
              }`}
            >
              {data.description}
            </p>
            <span
              className="inline cursor-pointer text-purple"
              onClick={() => setShowFull((prev) => !prev)}
            >
              {showFull ? "کمتر" : "بیشتر"}
            </span>
          </>
        ) : (
          <p>{data.description}</p>
        )}
      </div>
    );
  }
};

export default memo(SumComment);
