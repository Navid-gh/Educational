import { memo } from "react";
import Card from "./UI/Card";
import { Book, Course, Article } from "../Types/apiTypes";
import { cn } from "../utils/lib/Cn";

type Props =
  | {
      type: "book";
      array: Book[];
    }
  | {
      type: "course";
      array: Course[];
    }
  | {
      type: "article";
      array: Article[];
    };

const Cards = ({ array, type }: Props) => {
  if (type === "article" || type === "course") {
    array = (array as Article[] | Course[]).sort(
      (a, b) => a.sortByNumber - b.sortByNumber
    );
  }
  return (
    <ul className={cn("flex flex-wrap", { "gap-[2%]": type === "article" })}>
      {array?.map((item, idx) => {
        let cardType = "black";
        if (idx % 8 > 3) {
          cardType = "white";
        }
        return (
          <li
            key={idx}
            className={cn("mb-4", {
              "flex-[25%] max-w-[25%] mb-4 yellowTop:max-w-[33%] yellowTop:flex-[33%] navbar:flex-[50%] navbar:max-w-[50%] hero:flex-[100%] hero:max-w-[100%]":
                type === "course",
              "mb-8 flex-[20%] max-w-[20%] yellowTop:max-w-[25%] yellowTop:flex-[25%] navbar:flex-[33%] navbar:max-w-[33%] hero:flex-[50%] hero:max-w-[50%] books:flex-[100%] books:max-w-[100%]":
                type === "book",
              "flex-[49%] max-w-[49%] navbar:flex-[100%] navbar:max-w-[100%]":
                type === "article",
            })}
          >
            {type === "book" ? (
              <Card
                theme={cardType as "black" | "white"}
                type={type}
                details={item as Book}
              />
            ) : type === "course" ? (
              <Card
                theme={cardType as "black" | "white"}
                type={type}
                details={item as Course}
              />
            ) : (
              <Card
                theme={cardType as "black" | "white"}
                type={type}
                details={item as Article}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Cards);
