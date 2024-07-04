import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Exit: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.99 34"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-1{fill:#100303}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="panel">
          <g id="exit">
            <path
              className="cls-1"
              d="M32.34 13l-5.5-5.5a1.41 1.41 0 00-2 2l5.49 5.5a2.55 2.55 0 01.43.55H8.48a1.42 1.42 0 000 2.84l22.21-.05h.11a2.77 2.77 0 01-.47.65l-5.5 5.5a1.42 1.42 0 002 2l5.5-5.49a5.68 5.68 0 000-8z"
            />
            <path
              className="cls-1"
              d="M9.92 31.17H7.08a4.26 4.26 0 01-4.25-4.25V7.08a4.26 4.26 0 014.25-4.25h2.84a1.42 1.42 0 000-2.83H7.08A7.08 7.08 0 000 7.08v19.84A7.08 7.08 0 007.08 34h2.84a1.42 1.42 0 000-2.83z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(Exit);
