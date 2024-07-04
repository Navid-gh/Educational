import { useRef } from "react";
import SeoTags from "../../utils/lib/Helmet";
import ParallaxHeader from "../../Components/ParallaxHeader";
import IconWrapper from "../../Components/UI/IconWrapper";
import LeftArrow from "../../Components/UI/Icons/LeftArrow";
import CardsWithFilter from "../../Components/CardsWithFilter";

const Courses = () => {
  const CardsRef = useRef<HTMLDivElement | null>(null);

  const handleSwitch = () => {
    CardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SeoTags
        titleTemplate={`کتاب های صابر زارعی`}
        description={`صفحه ی کتاب های صابر زارعی`}
        Url={window.location.href}
      />
      <main className="flex flex-col gap-4">
        <ParallaxHeader
          bg="/images/cover-books.jpg"
          className="flex items-center"
        >
          <div className="flex flex-col text-white gap-6 px-12 w-full z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">
                کتاب های آکادمی فن بیان صابر زارعی
              </h1>
              <h2 className="text-2xl font-bold">
                کتاب هایی که برای موفقیت بهشون نیاز داری
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
        <CardsWithFilter type="book" ref={CardsRef} />
      </main>
    </>
  );
};

export default Courses;
