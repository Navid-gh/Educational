import { forwardRef, memo } from "react";
import MarkdownParser from "./MarkdownParser";
import CourseDetails from "./CourseDetails";
import MainHeader from "./UI/MainHeader";
import { cn } from "../utils/lib/Cn";
import { Detail } from "../Types/CourseDetail";
import { CardTypes } from "../Types/cardTypes";
import MainButton from "./UI/MainButton";
import ChooseBookType, { BookProps } from "./ChooseBookType";
import OwnerProfile from "./UI/OwnerProfile";
import DetailsUl from "./UI/DetailsUl";

type Props = {
  markdown: string;
  details?: Detail[];
  teacher: Record<string, string | number>;
  book?: Record<string, string | number>;
  infoHeader: string;
  type: CardTypes;
  buyHandler?: () => void;
  isInBasket?: boolean;
};

const CourseInfo = forwardRef<HTMLDivElement, Props>(
  (
    {
      details,
      infoHeader,
      markdown,
      teacher,
      book,
      type,
      buyHandler,
      isInBasket,
    },
    ref
  ) => {
    return (
      <section
        className={cn("flex gap-4 pt-8 px-4 tips:flex-col", {
          "navbar:flex-col": type === "book",
        })}
        id="overview"
        ref={ref}
      >
        <div className="flex flex-col gap-4 flex-[70%]">
          <MainHeader intent="bgBlack" size="main">
            {infoHeader}
          </MainHeader>
          <MarkdownParser text={markdown} />
        </div>
        <div
          className={cn(
            "flex-[30%] max-w-[17.5rem] justify-start flex flex-col gap-4 tips:max-h-full tips:flex-row tips:max-w-none hero:flex-col hero:max-w-[17.5rem]",
            { "tips:flex-col tips:max-w-[17.5rem]": book }
          )}
        >
          {type === "book" && book && details ? (
            <>
              <CourseDetails header="قیمت کتاب" key="1">
                <ChooseBookType
                  {...(book as BookProps)}
                  buyHandler={buyHandler!}
                  isInBasket={isInBasket!}
                />
              </CourseDetails>
              <CourseDetails header="اطلاعات کتاب" key="2">
                <DetailsUl details={details} />
              </CourseDetails>
              <CourseDetails header="درباره نویسنده" key="3">
                <OwnerProfile
                  name={teacher.name as string}
                  profile={teacher.profile as string}
                />
              </CourseDetails>
            </>
          ) : type === "course" && details ? (
            <>
              <CourseDetails header="اطلاعات دوره" key="1">
                <DetailsUl details={details} />
                {isInBasket ? (
                  <p className="self-center">هم اکنون در سبد خرید شما</p>
                ) : (
                  <MainButton
                    className="self-center w-full max-w-none"
                    text={`اضافه به سبد خرید`}
                    intent="purple"
                    size="medium"
                    onClick={() => buyHandler!()}
                  />
                )}
              </CourseDetails>
              <CourseDetails header="درباره مدرس" key="2">
                <OwnerProfile
                  name={teacher.name as string}
                  profile={teacher.profile as string}
                />
              </CourseDetails>
            </>
          ) : (
            <CourseDetails header="درباره نویسنده" key="1">
              <OwnerProfile
                name={teacher.name as string}
                profile={teacher.profile as string}
              />
            </CourseDetails>
          )}
        </div>
      </section>
    );
  }
);

export default memo(CourseInfo);
