import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const NumberCircle: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51.67 55.85"
      {...props}
    >
      <path
        d="M24.14 53.72C35.29 57.22 47.22 48.5 50.5 38c3.82-12.2-2.07-26.37-12.1-33.82A19.85 19.85 0 0021.22.67c-6 1.64-10.94 5.82-14.56 10.7C-.26 20.7-2.86 35.42 4.1 45.46c7.79 11.22 24 12.15 36 8.45 2.51-.77 1.44-4.27-1.06-3.86-9.28 1.52-20.65 3-28.39-3.71C2.63 39.38 3.06 27 7.46 18.12S22 .84 32.3 5.21c5.13 2.17 9.18 6.71 11.85 11.49a28.27 28.27 0 013.67 15.59C47 43.65 36.44 53.08 24.93 50.85a1.49 1.49 0 00-.79 2.87z"
        fill="#100303"
        data-name="Layer 2"
      />
    </svg>
  );
};

export default memo(NumberCircle);
