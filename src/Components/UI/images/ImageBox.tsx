import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const ImageBox: FC<SVGElementProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 638 638" {...props}>
      <defs>
        <clipPath id="image-box-box">
          <circle cx={309.32} cy={336} r={290.75} fill="none" />
        </clipPath>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <circle cx={319} cy={319} r={319} fill="#100303" />
          <g clipPath="url(#image-box-box)">
            <circle cx={309.32} cy={336} r={290.75} fill="#ffd97b" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(ImageBox);
