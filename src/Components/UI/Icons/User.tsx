import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Hamburger: FC<SVGElementProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14.67" {...props}>
      <g data-name="Layer 2">
        <path d="M5.5 7.33a3.67 3.67 0 10-3.67-3.66A3.66 3.66 0 005.5 7.33zm0-6.11a2.45 2.45 0 11-2.44 2.45A2.45 2.45 0 015.5 1.22zM5.5 8.56a5.5 5.5 0 00-5.5 5.5.61.61 0 001.22 0 4.28 4.28 0 118.56 0 .61.61 0 001.22 0 5.5 5.5 0 00-5.5-5.5z" />
      </g>
    </svg>
  );
};

export default memo(Hamburger);
