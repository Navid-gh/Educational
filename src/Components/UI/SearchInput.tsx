import { InputHTMLAttributes, useState, ChangeEvent, useCallback } from "react";
import SearchIcon from "./Icons/Search";
import { cn } from "../../utils/lib/Cn";
import { searchProducts } from "../../api/getters/filterAPI";
import useDebounceFunc from "../../hooks/useDebounceFunc";
import SearchResults from "./SearchResults";
import { Article, Book, Course } from "../../Types/apiTypes";

type Props = {
  className?: string;
  type: "sidebar" | "navbar" | "filter";
  placeHolder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({ className, type, placeHolder, ...rest }: Props) => {
  const [show, setIsShow] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [res, setRes] = useState<(Course | Book | Article)[]>([]);
  const debouncedHandler = useCallback(
    useDebounceFunc(async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value == "") {
        setIsShow(false);
        return;
      }
      setIsLoading(true);
      setIsShow(true);
      try {
        const res = await searchProducts(e.target.value);
        setRes(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );
  return (
    <div
      className={cn(
        "flex bg-pink rounded-full p-2 h-8 shadow-main items-center relative",
        className,
        { "bg-black bg-opacity-30": type === "sidebar" }
      )}
    >
      {type === "filter" ? (
        <input
          className={cn(
            "outline-0 border-0 px-1 bg-pink min-w-[16rem] rounded-full placeholder:text-[.7rem]",
            {
              "min-w-[5rem] max-w-[7.5rem] py-2": type === "filter",
            }
          )}
          type="text"
          placeholder={placeHolder}
          {...rest}
        />
      ) : (
        <input
          className={cn(
            "outline-0 border-0 px-1 bg-pink min-w-[16rem] rounded-full placeholder:text-[.7rem]",
            {
              "min-w-0 max-w-[7.5rem] bg-transparent": type === "sidebar",
            }
          )}
          type="text"
          placeholder={placeHolder}
          {...rest}
          onChange={(e) => debouncedHandler(e)}
        />
      )}
      <div
        className={cn(
          "w-8 p-1 rounded-full bg-pink flex items-center justify-center h-full ",
          { "bg-transparent": type === "sidebar" }
        )}
      >
        <SearchIcon
          id="search-svg"
          className={cn("fill-black w-4 h-4 cursor-pointer", {
            "fill-pink": type === "sidebar",
          })}
        />
      </div>
      <SearchResults
        data={res}
        loading={loading}
        show={show}
        sidebar={type === "sidebar"}
      />
    </div>
  );
};

export default SearchInput;
