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
        <div className="flex items-center gap-2 self-start">
          <Link to={"/courses/Fanbayan"}>
            <MainButton
              intent={"black"}
              size="small"
              text="آموزش تخصصی فن بیان برای تمام سنین"
              className="max-w-none p-4"
            />
          </Link>
          <Link to={"/courses/PersonalDevelopment"}>
            <MainButton
              intent={"purple"}
              size="small"
              text="آموزش مهارت های رشد و توسعه ی فردی"
              className="max-w-none p-4"
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
