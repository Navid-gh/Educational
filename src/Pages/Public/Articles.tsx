import { useRef } from "react";
import ParallaxHeader from "../../Components/ParallaxHeader";
import IconWrapper from "../../Components/UI/IconWrapper";
import LeftArrow from "../../Components/UI/Icons/LeftArrow";
import SeoTags from "../../utils/lib/Helmet";
import CardsWithFilter from "../../Components/CardsWithFilter";

const Articles = () => {
  const CardsRef = useRef<HTMLDivElement | null>(null);

  const handleSwitch = () => {
    CardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <SeoTags
        titleTemplate={`مقاله های صابر زارعی`}
        description={`صفحه ی مقاله های صابر زارعی`}
        Url={window.location.href}
      />
      <main>
        <ParallaxHeader
          bg="/images/cover-articles.jpg"
          className="flex items-center"
        >
          <div className="flex flex-col text-white gap-6 px-12 w-full z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">
                مقالات آکادمی فن بیان صابر زارعی
              </h1>
              <h2 className="text-2xl font-bold">
                به روز و پیشرو باش تا فرصت بسازی
              </h2>
            </div>
            <div className="flex justify-between tips2:flex-col tips2:gap-4">
              <IconWrapper
                className="bg-transparent p-2 border border-white border-solid max-w-[2rem] max-h-8"
                onClick={handleSwitch}
              >
                <LeftArrow className="fill-white w-4 h-4 -rotate-90" />
              </IconWrapper>
            </div>
          </div>
        </ParallaxHeader>
        <CardsWithFilter type="article" ref={CardsRef} />
      </main>
    </>
  );
};

export default Articles;
