import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./UI/Card";
import { memo, forwardRef } from "react";
import MainButton from "./UI/MainButton";
import MainHeader from "./UI/MainHeader";
import { Book, Course } from "../Types/apiTypes";
import { CardTypes } from "../Types/cardTypes";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/getters/courseAPI";
import { getArticles } from "../api/getters/articleAPI";
import { getBooks } from "../api/getters/bookAPI";
import WithLoaderAndError from "./WithLoaderAndError";
import { Link } from "react-router-dom";
import Cards from "./Cards";

type Props = {
  header: string;
  theme: "black" | "white";
  apiUrl: string;
  inCoursePage: boolean;
  id?: string;
  type: CardTypes;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1160 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1160, min: 860 },
    items: 3,
    slidesToSlide: 3,
  },
  miniTablet: {
    breakpoint: { max: 860, min: 560 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const bookResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 4,
    slidesToSlide: 4,
  },
  miniTablet: {
    breakpoint: { max: 750, min: 560 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 560, min: 360 },
    items: 2,
    slidesToSlide: 2,
  },
  miniMobile: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProductsSlider = forwardRef<HTMLDivElement, Props>(
  ({ header, theme, apiUrl, inCoursePage, id, type }, ref) => {
    let data: any = {};
    let isLoading: boolean = false;
    let isError: boolean = false;
    let error: Error | null = null;

    if (type === "course") {
      const courseQuery = useQuery({
        queryKey: [type, id, apiUrl],
        queryFn: getCourses,
      });
      data = courseQuery.data;
      isLoading = courseQuery.isLoading;
      isError = courseQuery.isError;
      error = courseQuery.error;
    } else if (type === "article") {
      const articleQuery = useQuery({
        queryKey: [type, id, apiUrl],
        queryFn: getArticles,
      });
      data = articleQuery.data;
      isLoading = articleQuery.isLoading;
      isError = articleQuery.isError;
      error = articleQuery.error;
    } else if (type === "book") {
      const bookQuery = useQuery({
        queryKey: [type, id, apiUrl],
        queryFn: getBooks,
      });
      data = bookQuery.data;
      isLoading = bookQuery.isLoading;
      isError = bookQuery.isError;
      error = bookQuery.error;
    }

    return (
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <section className="mt-8 flex flex-col gap-6" ref={ref} id={id}>
          {inCoursePage ? (
            <div className="px-4">
              <MainHeader intent="bgBlack" size="main">
                {header}
              </MainHeader>
            </div>
          ) : (
            <span className="font-bold text-black text-xl text-right px-4">
              {header}
            </span>
          )}
          {type === "article" ? (
            <>
              <Cards array={data} type="article" />
            </>
          ) : (
            <>
              <div className="relative pb-10">
                <Carousel
                  className="p-2"
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside
                  responsive={type === "book" ? bookResponsive : responsive}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={true}
                  shouldResetAutoplay
                  showDots
                  slidesToSlide={1}
                  swipeable
                >
                  {type === "course"
                    ? (data as Course[])
                        ?.sort((a, b) => a.sortByNumber - b.sortByNumber)
                        .map((item: Course, idx: number) => {
                          return (
                            <Card
                              theme={theme}
                              key={idx}
                              type={type}
                              details={item as Course}
                            />
                          );
                        })
                    : data?.map((item: Book, idx: number) => {
                        return (
                          <Card
                            theme={theme}
                            key={idx}
                            type={type}
                            details={item as Book}
                          />
                        );
                      })}
                </Carousel>
              </div>
            </>
          )}
          <div className="text-center">
            <Link
              to={
                type === "course"
                  ? "/Courses"
                  : type === "article"
                  ? "/Articles"
                  : "/Books"
              }
            >
              <MainButton
                text={
                  type === "course"
                    ? "همه دوره ها"
                    : type === "article"
                    ? "همه مقالات"
                    : "همه کتاب ها"
                }
                intent="black"
                size="medium"
              />
            </Link>
          </div>
        </section>
      </WithLoaderAndError>
    );
  }
);

export default memo(ProductsSlider);
