import { memo } from "react";

type Props = {
  image: string;
};

const ImageSlide = ({ image }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        className="w-full h-full max-w-full"
        alt="slide show image"
      />
    </div>
  );
};

export default memo(ImageSlide);
