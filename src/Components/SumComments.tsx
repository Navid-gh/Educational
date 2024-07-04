import { memo } from "react";
import HeadTitle from "./UI/HeadTitle";
import SumComment from "./UI/SumComment";
import MainHeader from "./UI/MainHeader";
import AddComment from "./AddComment";
import { getViews } from "../api/getters/mainViewsAPI";
import { useQuery } from "@tanstack/react-query";
import WithLoaderAndError from "./WithLoaderAndError";
import { CardTypes } from "../Types/cardTypes";
import type { Comment } from "../Types/apiTypes";

type Props =
  | {
      type: "home";
    }
  | { type: CardTypes; comments: Comment[]; id: string; parentId?: string };

const SumComments = (props: Props) => {
  if (props.type === "home") {
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ["views", "admin"],
      queryFn: getViews,
    });
    return (
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        {data?.length && data?.length > 0 ? (
          <section className="flex flex-col gap-6 pt-6">
            <HeadTitle>نظرات هنرجویان</HeadTitle>
            <ul className="flex flex-wrap justify-between gap-10 sumComment:gap-3">
              {data?.map(({ __v, _id, ...rest }, idx) => {
                let theme = "girl";
                if (idx === 0 || idx % 2 === 0) {
                  theme = "boy";
                }
                return (
                  <SumComment
                    type="view"
                    data={rest}
                    key={_id}
                    wordLimit={300}
                    theme={theme as "girl" | "boy"}
                  />
                );
              })}
            </ul>
          </section>
        ) : null}
      </WithLoaderAndError>
    );
  }
  return (
    <section className="flex flex-col gap-6 pt-6">
      <MainHeader intent="bgBlack" size="main">
        نظرات هنرجویان
      </MainHeader>
      <AddComment type={props.type} id={props.id} parentId={props.parentId} />
      <ul className="flex flex-wrap justify-between gap-10 sumComment:gap-3">
        {props.comments?.map((comment, idx) => {
          let theme = "girl";
          if (idx === 0 || idx % 2 === 0) {
            theme = "boy";
          }
          return (
            <SumComment
              type="comment"
              data={comment}
              key={idx}
              theme={theme as "girl" | "boy"}
              wordLimit={3000}
              full={true}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default memo(SumComments);
