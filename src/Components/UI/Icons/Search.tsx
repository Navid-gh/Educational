import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const SearchIcon: FC<SVGElementProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g data-name="Layer 2">
        <path
          d="M31.63 29.74l-8-7.95a13.34 13.34 0 10-1.88 1.88l8 8a1.34 1.34 0 001.89-1.89zM13.37 24A10.66 10.66 0 1124 13.37 10.65 10.65 0 0113.37 24z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
};

export default memo(SearchIcon);
