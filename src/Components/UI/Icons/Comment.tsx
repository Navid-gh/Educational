import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Comment: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49.95 50"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-1{fill:#5b0888}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="panel">
          <g id="commeent">
            <path
              className="cls-1"
              d="M0 39.59A10.42 10.42 0 0010.41 50h14.53A25 25 0 100 23.46zm4.16-15.93A20.92 20.92 0 0111.65 9a20.66 20.66 0 0113.28-4.79 22.28 22.28 0 012.71.17 20.9 20.9 0 0118 18.24 20.63 20.63 0 01-5.14 16.26 20.94 20.94 0 01-15.56 7H10.41a6.25 6.25 0 01-6.25-6.25z"
            />
            <path
              className="cls-1"
              d="M16.65 18.78H25a2.08 2.08 0 000-4.16h-8.35a2.08 2.08 0 100 4.16zM33.3 22.94H16.65a2.09 2.09 0 000 4.17H33.3a2.09 2.09 0 000-4.17zM33.3 31.27H16.65a2.08 2.08 0 100 4.16H33.3a2.08 2.08 0 100-4.16z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(Comment);
