import { forwardRef, useEffect, memo, useCallback } from "react";
import Filter from "./Filter";
import Cards from "./Cards";
import { useQuery } from "@tanstack/react-query";
import WithLoaderAndError from "./WithLoaderAndError";
import { filterProducts } from "../api/getters/filterAPI";
import useDebounceFunc from "../hooks/useDebounceFunc";
import { useSearchParams } from "react-router-dom";
import { Article, Book, Course } from "../Types/apiTypes";

type Props = {
  type: "book" | "article" | "course";
  category?: string;
};

const CardsWithFilter = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [queryParameters, setQueryParameters] = useSearchParams({
    search: "",
    sort: "",
  });
  let { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [`filterproducts:${props.type}:${props.category}`],
    queryFn: () =>
      filterProducts({
        type: props.type === "article" ? "blog" : props.type,
        curseCategory:
          props.type === "course" && props.category ? props.category : null,
        query:
          queryParameters.get("sort") === ""
            ? null
            : queryParameters.get("sort"),
        search:
          queryParameters.get("search") === ""
            ? null
            : queryParameters.get("search"),
      }),
    enabled:
      queryParameters.get("search") != null ||
      queryParameters.get("sort") != null
        ? true
        : false,
  });
  const debouncedRefetch = useCallback(useDebounceFunc(refetch, 500), [
    refetch,
  ]);

  const handleParamsChange = useCallback(
    (key: "search" | "sort", value: string) => {
      setQueryParameters((prev) => {
        prev.set(key, value);
        return prev;
      });
    },
    []
  );
  useEffect(() => {
    debouncedRefetch();
  }, [queryParameters.get("search"), queryParameters.get("sort")]);

  return (
    <section className="p-4 flex flex-col gap-8">
      {props.type === "course" && props.category ? null : (
        <section>
          <Filter
            queryParameters={queryParameters}
            handleParamsChange={handleParamsChange}
          />
        </section>
      )}
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        {data ? (
          <section ref={ref}>
            {props.type === "article" ? (
              <Cards array={data as Article[]} type="article" />
            ) : props.type === "book" ? (
              <Cards array={data as Book[]} type="book" />
            ) : (
              <Cards array={data as Course[]} type="course" />
            )}
          </section>
        ) : null}
      </WithLoaderAndError>
    </section>
  );
});

export default memo(CardsWithFilter);
