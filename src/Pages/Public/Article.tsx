import { useRef, useMemo } from "react";
import CourseNav from "../../Components/CourseNav";
import ParallaxHeader from "../../Components/ParallaxHeader";
import IconWrapper from "../../Components/UI/IconWrapper";
import LeftArrow from "../../Components/UI/Icons/LeftArrow";
import CourseInfo from "../../Components/CourseInfo";
import SumComments from "../../Components/SumComments";
import SeoTags from "../../utils/lib/Helmet";
import { useQuery } from "@tanstack/react-query";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import Cards from "../../Components/Cards";
import { Article } from "../../Types/apiTypes";
import MainHeader from "../../Components/UI/MainHeader";
import { getArticle } from "../../api/getters/articleAPI";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/axios";
import useSubmitView from "../../hooks/useSubmitView";

const arr: Article[] = [];

const Book = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const commentsef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  const { id } = useParams();

  useSubmitView("blog", id);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticle(id as string),
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

  const teacher = useMemo(() => {
    return {
      name: "صابر زارعی",
      profile: "/images/saber.jpg",
    };
  }, []);

  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      {data ? (
        <>
          <SeoTags
            titleTemplate={`${data?.urlTitle}`}
            description={`صفحه ی مقاله  ${data.title}`}
            Url={window.location.href}
          >
            <meta property="og:title" content={`${data?.urlTitle}`} />
            <meta
              property="og:description"
              content={`صفحه ی مقاله  ${data.title}`}
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
              teacher={teacher}
              infoHeader={`درباره مقاله ${data.title}`}
              ref={infoRef}
              type="article"
            />
            <div className="p-4" id="comments" ref={commentsef}>
              <SumComments
                type="article"
                comments={data.comments}
                id={data._id}
              />
            </div>
            <section
              className="flex flex-col gap-6 pt-6 p-4"
              ref={relatedRef}
              id="related-courses"
            >
              <MainHeader intent="bgBlack" size="main">
                مقالات مرتبط
              </MainHeader>
              <Cards type="article" array={arr as Article[]} />
            </section>
          </main>
        </>
      ) : null}
    </WithLoaderAndError>
  );
};

export default Book;
