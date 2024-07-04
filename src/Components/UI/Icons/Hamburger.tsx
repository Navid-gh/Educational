import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Hamburger: FC<SVGElementProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 18h16M4 12h16M4 6h16"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default memo(Hamburger);
