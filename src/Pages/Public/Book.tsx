import { useRef, useMemo, useCallback } from "react";
import CourseNav from "../../Components/CourseNav";
import ParallaxHeader from "../../Components/ParallaxHeader";
import IconWrapper from "../../Components/UI/IconWrapper";
import LeftArrow from "../../Components/UI/Icons/LeftArrow";
import { usePersianNums } from "../../hooks/usePersianNums";
import CourseInfo from "../../Components/CourseInfo";
import SumComments from "../../Components/SumComments";
import ProductsSlider from "../../Components/ProductsSlider";
import SeoTags from "../../utils/lib/Helmet";
import { useQuery } from "@tanstack/react-query";
import { getBook } from "../../api/getters/bookAPI";
import { v4 as uuidv4 } from "uuid";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/axios";
import useSubmitView from "../../hooks/useSubmitView";
import useAddToBasket from "../../hooks/useAddToBasket";
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxHooks";
import useAuth from "../../hooks/useAuth";

const Book = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const commentsef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);
  const { Auth } = useAuth();
  const { products } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useSubmitView("book", id);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBook(id as string),
  });

  const handleSwitch = (id: string) => {
    const refs = [infoRef, commentsef, relatedRef];
    refs.forEach((ref) => {
      if (ref?.current?.id === id) {
        ref?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    });
  };

  const details = useMemo(() => {
    if (data) {
      return [
        {
          key: "موضوع",
          value: data.title,
          id: uuidv4(),
        },
        {
          key: "تعداد صفحات",
          value: usePersianNums(data.numberOfPages),
          id: uuidv4(),
        },
        {
          key: "سال انتشار",
          value: usePersianNums(data.yearOfPublication),
          id: uuidv4(),
        },
        {
          key: "تعداد بازدید",
          value: usePersianNums(419 + Number(data.numberLink), true),
          id: uuidv4(),
        },
      ];
    } else {
      return [];
    }
  }, [data]);
  const bookDetails = useMemo(() => {
    if (data) {
      return {
        digitPrice: data.finalPriceVirtual,
        physicPrice: data.finalPricePhysical,
        image: BASE_URL + data.images[0],
        pdf: "/" + data.link,
      };
    } else {
      return {
        digitPrice: 0,
        physicPrice: 0,
        image: "",
        pdf: "/",
      };
    }
  }, [data]);

  const teacher = useMemo(() => {
    return {
      name: "صابر زارعی",
      profile: "/images/saber.jpg",
    };
  }, []);

  const buyHandler = useCallback(() => {
    useAddToBasket(Auth, dispatch, data!, "book");
  }, [data]);
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      {data ? (
        <>
          <SeoTags
            titleTemplate={`${data?.urlTitle}`}
            description={`صفحه ی کتاب  ${data.title}`}
            Url={window.location.href}
          >
            <meta property="og:title" content={`${data?.urlTitle}`} />
            <meta
              property="og:description"
              content={`صفحه ی کتاب  ${data?.title}`}
            />
            <meta
              property="og:image"
              content={`${BASE_URL}${data.images[0]}`}
            />
            <meta property="og:url" content={window.location.href} />
          </SeoTags>
          <main className="flex flex-col">
            <ParallaxHeader
              bg={`${BASE_URL}${data.images[1]}`}
              className="flex items-center"
            >
              <div className="flex flex-col text-white gap-6 px-12 w-full z-10">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <h2 className="text-xl font-bold">{data.short_text}</h2>
                </div>
                <div className="flex justify-between tips2:flex-col tips2:gap-4">
                  <IconWrapper
                    className="bg-transparent p-2 border border-white border-solid max-w-[2rem] max-h-8"
                    onClick={() => handleSwitch("overview")}
                  >
                    <LeftArrow className="fill-white w-4 h-4 -rotate-90" />
                  </IconWrapper>
                </div>
              </div>
            </ParallaxHeader>
            <CourseNav type="book" siwtchHandler={handleSwitch} />
            <CourseInfo
              markdown={data.text}
              details={details}
              teacher={teacher}
              book={bookDetails}
              infoHeader={`درباره کتاب ${data.title}`}
              ref={infoRef}
              type="book"
              buyHandler={buyHandler}
              isInBasket={
                products.find((item) => item._id === data._id) ? true : false
              }
            />
            <div className="p-4" id="comments" ref={commentsef}>
              <SumComments type="book" comments={data.comments} id={data._id} />
            </div>
            <ProductsSlider
              apiUrl=""
              header="کتاب های مرتبط"
              theme="black"
              type="book"
              inCoursePage={true}
              ref={relatedRef}
              id="related-courses"
            />
          </main>
        </>
      ) : null}
    </WithLoaderAndError>
  );
};

export default Book;
