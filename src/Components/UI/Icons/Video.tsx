import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Video: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path
        d="M30 14.12v1.76a1.84 1.84 0 00-.05.25A14.07 14.07 0 0128.24 22a14.73 14.73 0 01-12.61 8A13.71 13.71 0 018 28.24a14.69 14.69 0 01-8-12.61A14 14 0 011.76 8 14.79 14.79 0 0112.39.24C13 .13 13.54.08 14.12 0h1.76l.26.05a13.51 13.51 0 014.42 1 14.81 14.81 0 019.21 11.37c.11.58.15 1.14.23 1.7zM10.72 15v4.21a1.07 1.07 0 001.63 1q4.19-2.07 8.37-4.18a1.11 1.11 0 00.71-1 1.16 1.16 0 00-.73-1l-8.29-4.2a1.08 1.08 0 00-1.69 1z"
        fill="#100303"
        data-name="Layer 2"
      />
    </svg>
  );
};

export default memo(Video);
