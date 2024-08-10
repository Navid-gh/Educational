import { useRef, useMemo, useCallback } from "react";
import CourseNav from "../../Components/CourseNav";
import ParallaxHeader from "../../Components/ParallaxHeader";
import IconWrapper from "../../Components/UI/IconWrapper";
import LeftArrow from "../../Components/UI/Icons/LeftArrow";
import MainButton from "../../Components/UI/MainButton";
import { usePersianNums } from "../../hooks/usePersianNums";
import CourseInfo from "../../Components/CourseInfo";
import DropDowns from "../../Components/Accordions";
import { v4 as uuidv4 } from "uuid";
import SumComments from "../../Components/SumComments";
import ProductsSlider from "../../Components/ProductsSlider";
import SeoTags from "../../utils/lib/Helmet";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../api/getters/courseAPI";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/axios";
import useSubmitView from "../../hooks/useSubmitView";
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxHooks";
import useAddToBasket from "../../hooks/useAddToBasket";
import useAuth from "../../hooks/useAuth";

const Course = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const asksRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<HTMLDivElement>(null);
  const commentsef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);
  const { Auth } = useAuth();
  const { products } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useSubmitView("course", id);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourse(id as string),
  });

  const handleSwitch = (id: string) => {
    const refs = [infoRef, asksRef, chaptersRef, commentsef, relatedRef];
    for (const ref of refs) {
      if (ref?.current?.id === id) {
        ref?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        break;
      }
    }
  };

  const details = useMemo(() => {
    if (data) {
      let episodes = 0;
      let totalHours = 0;
      let totalMinutes = 0;
      data.chapters.forEach((chapter) => {
        episodes += chapter.episodes.length;
        totalHours += Number(chapter.time.hour);
        totalMinutes += Number(chapter.time.min);
      });
      if (totalMinutes >= 60) {
        totalHours += Math.floor(totalMinutes / 60);
        totalMinutes %= 60;
      }
      return [
        {
          key: "قیمت",
          value: usePersianNums(data.finalPrice, true),
          id: uuidv4(),
        },
        {
          key: "قبل از خرید، مشاوره رایگان دریافت کنید",
          value: usePersianNums("09330042028"),
          id: uuidv4(),
        },
        {
          key: "سطح",
          value: data.level,
          id: uuidv4(),
        },
        {
          key: "تعداد فصول",
          value: usePersianNums(data.chapters.length),
          id: uuidv4(),
        },
        {
          key: "تعداد جلسات",
          value: usePersianNums(episodes),
          id: uuidv4(),
        },
        {
          key: "مدت زمان دوره",
          value: usePersianNums(`${totalHours} ساعت و ${totalMinutes} دقیقه`),
          id: uuidv4(),
        },
        {
          key: "تعداد بازدید",
          value: usePersianNums(449 + Number(data.numberLink), true),
          id: uuidv4(),
        },
      ];
    } else {
      return [];
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
            titleTemplate={`${data?.title}`}
            description={`صفحه ی دوره  ${data.title}`}
            Url={window.location.href}
          >
            <meta property="og:title" content={`${data?.title}`} />
            <meta
              property="og:description"
              content={`صفحه ی دوره  ${data.title}`}
            />
            <meta
              property="og:image"
              content={`${BASE_URL}${data.images[1]}`}
            />
            <meta property="og:url" content={window.location.href} />
          </SeoTags>
          <main className="flex flex-col">
            <ParallaxHeader
              bg={`${BASE_URL}${data.images[0]}`}
              className="flex items-center"
            >
              <div className="flex flex-col text-white gap-6 px-12 w-full z-10">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <div className="flex justify-between tips2:flex-col tips2:gap-4">
                  <IconWrapper
                    className="bg-transparent p-2 border border-white border-solid max-w-[2rem] max-h-8"
                    onClick={() => handleSwitch("overview")}
                  >
                    <LeftArrow className="fill-white w-4 h-4 -rotate-90" />
                  </IconWrapper>
                  <MainButton
                    text={`خرید انلاین ${usePersianNums(
                      data.finalPrice,
                      true
                    )} تومان`}
                    intent="purple"
                    size="medium"
                  />
                </div>
              </div>
            </ParallaxHeader>
            <CourseNav type="course" siwtchHandler={handleSwitch} />
            <CourseInfo
              markdown={data.text}
              details={details}
              teacher={teacher}
              infoHeader={`درباره ${data.title}`}
              ref={infoRef}
              type="course"
              isInBasket={
                products.find((item) => item._id === data._id) ? true : false
              }
              buyHandler={buyHandler}
            />
            {/* <VideoPlayer videoUrl="https://www.aparat.com/video/video/embed/videohash/BWOCi/vt/frame?titleShow=true&autoplay=true" /> */}
            <DropDowns
              title="سوالات متداول"
              type="Q"
              drops={data.frequentlyAskedQuestions}
              bg="bg-lowPink"
              key={1}
              id="freq-questions"
              ref={asksRef}
            />
            <DropDowns
              title="سر فصل های دوره"
              type="S"
              drops={data.chapters}
              bg="bg-lowYellow"
              key={2}
              id="chapters"
              ref={chaptersRef}
            />
            <div className="p-4 z-10" id="comments" ref={commentsef}>
              <SumComments
                type="course"
                comments={data.comments}
                id={data._id}
              />
            </div>
            <ProductsSlider
              apiUrl=""
              header="دوره های مرتبط"
              theme="black"
              type="course"
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

export default Course;
