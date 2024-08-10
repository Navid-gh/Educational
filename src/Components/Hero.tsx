import ImageSlideShow from "./ImageSlideShow";
import Underline from "./UI/images/Underline";
import MainButton from "./UI/MainButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex gap-4 hero:flex-col">
      <div className="flex-1 flex flex-col gap-10 pt-8 min-w-[50%] hero:min-w-0">
        <div className="relative flex items-center justify-start min-h-[7rem] pr-[8%] hero:justify-center hero:pr-0">
          {/* <TextCover className="absolute inset-0 h-full hero:w-full" /> */}
          <span className="font-bold text-5xl">آکادمی فن بیان صابر زارعی</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[1.925rem] [@media(max-width:1000px)]:text-[1.425rem]">
            فرصت پیوند افکار
          </h1>
          <h2 className="font-semibold text-[1.625rem] [@media(max-width:1000px)]:text-[1.25rem]">
            هر آنچه که نیاز داری برای رشد و ارتقا مهارت های فردیت
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 self-start flex-wrap">
          <Link to={"/courses/Fanbayan"} className="min-w-fit">
            <MainButton
              intent={"black"}
              size="small"
              text="آموزش تخصصی فن بیان برای تمام سنین"
              className="max-w-none p-4"
            />
          </Link>
          <Link to={"/courses/PersonalDevelopment"} className="min-w-fit">
            <MainButton
              intent={"purple"}
              size="small"
              text="آموزش مهارت های رشد و توسعه ی فردی"
              className="max-w-none p-4"
            />
          </Link>
          <Link
            to={
              "/Article/66982119b81fb6d998b0308d/%D9%85%DB%8C%D9%86%DB%8C-%D8%AF%D9%88%D8%B1%D9%87"
            }
            className="min-w-fit"
          >
            <MainButton
              intent={"purple"}
              size="small"
              text="دوره رایگان"
              className="max-w-none p-4 bg-red-500"
            />
          </Link>
        </div>
        <Underline className="" id="underline-svg" />
      </div>
      {/* <HeroImage className="flex-1 w-full h-full" id="hero-image" /> */}
      <ImageSlideShow />
    </section>
  );
};

export default Hero;
