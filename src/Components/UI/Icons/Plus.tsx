import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Plus: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-1{fill:#5b0888}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="panel">
          <path
            className="cls-1"
            d="M25 0a25 25 0 1025 25A25 25 0 0025 0zm0 45.83A20.83 20.83 0 1145.83 25 20.82 20.82 0 0125 45.83z"
          />
          <path
            className="cls-1"
            d="M35.43 25a2.09 2.09 0 01-2.09 2.08h-6.25v6.25a2.08 2.08 0 11-4.16 0v-6.24h-6.25a2.09 2.09 0 110-4.17h6.25v-6.25a2.08 2.08 0 114.16 0v6.25h6.25A2.1 2.1 0 0135.43 25z"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(Plus);
