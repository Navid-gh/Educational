import WithLoaderAndError from "./WithLoaderAndError";
import Carousel from "react-multi-carousel";
import { useQuery } from "@tanstack/react-query";
import ImageSlide from "./UI/ImageSlide";
import { getSlides } from "../api/getters/slidesAPI";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1160 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1160, min: 860 },
    items: 1,
    slidesToSlide: 1,
  },
  miniTablet: {
    breakpoint: { max: 860, min: 560 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ImageSlideShow = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["slides"],
    queryFn: () => getSlides(),
  });
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex-1 overflow-hidden rounded-2xl self-center hero:self-auto hero:max-w-none max-w-[50%] max-h-[400px]">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          rewind={false}
          responsive={responsive}
          rewindWithAnimation={false}
          rtl={true}
          shouldResetAutoplay
          slidesToSlide={1}
          swipeable
        >
          {data?.map(({ images }, index) => (
            <ImageSlide key={index} image={images[0]} />
          ))}
        </Carousel>
      </div>
    </WithLoaderAndError>
  );
};

export default ImageSlideShow;
