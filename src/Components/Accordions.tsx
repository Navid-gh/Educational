import { memo, forwardRef } from "react";
import MainHeader from "./UI/MainHeader";
import Accordion from "./UI/Accordion";
import { cn } from "../utils/lib/Cn";
import NumberCircle from "./UI/images/NumberCircle";
import Video from "./UI/Icons/Video";
import { usePersianNums } from "../hooks/usePersianNums";
import { Chapter, FAQ } from "../Types/apiTypes";

type Props =
  | {
      title: string;
      type: "S";
      drops: Chapter[];
      bg: string;
      id: string;
    }
  | {
      title: string;
      type: "Q";
      drops: FAQ[];
      bg: string;
      id: string;
    };

const Accordions = forwardRef<HTMLDivElement, Props>(
  ({ title, drops, type, bg, id }, ref) => {
    return (
      <section className="flex flex-col p-8 gap-4 px-4" id={id} ref={ref}>
        <MainHeader intent="bgBlack" size="main">
          {title}
        </MainHeader>
        <div className={cn("p-10 rounded-2xl subHero:px-2", bg)}>
          <ul className="flex flex-col gap-6">
            {type === "Q"
              ? drops.map(({ _id, answer, question }) => {
                  return (
                    <Accordion
                      key={_id}
                      head={
                        <span className="tips2:text-[.75rem]">{question}</span>
                      }
                      content={<p>{answer}</p>}
                      bg="bg-pink"
                    />
                  );
                })
              : drops.map(({ episodes, _id, text, time }, idx) => {
                  return (
                    <Accordion
                      key={_id as string}
                      head={
                        <div className="flex justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="relative p-2">
                              <NumberCircle className="absolute inset-0 w-full h-full" />
                              <span>{usePersianNums(idx + 1)}</span>
                            </div>
                            <span className="tips2:text-[.75rem]">{text}</span>
                          </div>
                          <div className="flex items-center gap-2 ml-6">
                            <Video className="w-4 h-4" />
                            <div className="flex gap-1">
                              <span> {usePersianNums(time.hour)} ساعت </span>
                              <span>و {usePersianNums(time.min)} دقیقه</span>
                            </div>
                          </div>
                        </div>
                      }
                      content={
                        <div className="flex flex-col gap-6">
                          {Array.isArray(episodes)
                            ? episodes.map(({ _id, title }) => (
                                <div
                                  key={_id}
                                  className="flex gap-3 items-center pr-3"
                                >
                                  <Video className="min-w-4 min-h-4 max-w-4 max-h-4" />
                                  <span>{title}</span>
                                </div>
                              ))
                            : null}
                        </div>
                      }
                      bg="bg-yellow"
                    />
                  );
                })}
          </ul>
        </div>
      </section>
    );
  }
);

export default memo(Accordions);
