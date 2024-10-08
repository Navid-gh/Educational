import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Pay: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 208 208"
      {...props}
      id={id}
    >
      <defs>
        <style>
          {` #${id} .cls-2{fill:#e6e6e6} #${id} .cls-6{fill:#4d4d4d} #${id} .cls-9{fill:#5b0888} #${id} .cls-10{fill:#fff} #${id} .cls-11{fill:#b3b3b3} #${id} .cls-13{fill:#fcfefb}`}
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="_1" data-name={1}>
            <g id="_14" data-name={14}>
              <path
                className="cls-2"
                d="M0 104c0 1.38 0 2.76.09 4.13a104 104 0 0092.52 99.23A99.51 99.51 0 00104 208c.9 0 1.83 0 2.73-.05A104 104 0 10.17 98C0 100 0 102 0 104z"
              />
              <path
                d="M.09 108.12a104 104 0 0092.52 99.23A99.51 99.51 0 00104 208c.9 0 1.83 0 2.73-.05l59.57-76.3 2-6-28-19-57-21-43-38z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#c1c0c6"
                opacity={0.7}
              />
              <g id="_14-2" data-name={14}>
                <path
                  d="M167 136.47c.17-2.05 0-4.45-.34-4.75l-20.77-21a5.15 5.15 0 00-2.58-.49H47.25a5.15 5.15 0 00-2.58.49l-20.77 21c-.3.3-.51 2.7-.34 4.75z"
                  fill="#333"
                />
                <path
                  d="M142.09 111.05H48.46a4.88 4.88 0 00-2.48.47l-18.26 19.21c-.46.49.43.9 2 .9h131.11c1.56 0 2.46-.41 2-.9l-18.26-19.21a4.91 4.91 0 00-2.48-.47z"
                  fill="#999"
                />
                <path
                  className="cls-6"
                  d="M110 116.32h6.1c.53 0 .93-.15.9-.35l-.33-2c0-.18-.46-.33-1-.33h-5.75c-.5 0-.9.15-.91.32v2c-.01.19.43.36.99.36zM124.53 113.69h-5.74c-.5 0-.87.14-.84.32l.39 2c0 .2.5.36 1 .36h6.09c.53 0 .89-.16.82-.36l-.73-2c-.04-.18-.52-.32-.99-.32zM133.35 113.7h-5.73c-.49 0-.84.14-.77.32l.79 2c.08.2.57.36 1.1.36h6.08c.52 0 .85-.16.74-.36l-1.13-2c-.1-.18-.59-.32-1.08-.32zM110 119.86h6.58c.56 0 1-.18 1-.41l-.37-2.28c0-.2-.5-.37-1-.37H110c-.53 0-1 .17-1 .37v2.28c0 .22.45.41 1 .41zM125.62 116.81h-6.16c-.53 0-.92.17-.88.37l.44 2.28c0 .23.54.41 1.11.42h6.56c.56 0 1-.18.87-.41l-.84-2.28c-.08-.19-.57-.38-1.1-.38zM135.08 116.82h-6.14c-.53 0-.9.17-.82.37l.92 2.28c.09.23.62.41 1.18.42h6.55c.57 0 .92-.19.79-.41l-1.31-2.28a1.58 1.58 0 00-1.17-.38zM110.06 124h7.13c.61 0 1.07-.22 1-.48l-.44-2.66c0-.24-.54-.43-1.11-.43H110c-.57 0-1 .19-1 .43v2.66c0 .25.45.48 1.06.48zM126.88 120.42h-6.63c-.57 0-1 .19-1 .43l.52 2.66c.05.26.59.49 1.2.49h7.11c.61 0 1-.22.93-.49l-1-2.65c-.01-.24-.56-.44-1.13-.44zM137.08 120.43h-6.62c-.57 0-1 .19-.87.43l1.07 2.66c.11.26.69.48 1.3.48h7.1c.61 0 1-.21.82-.48l-1.52-2.66a1.72 1.72 0 00-1.28-.43zM128.38 124.71h-17.77c-.91 0-1.67.23-1.67.51v3.16c0 .31.8.58 1.78.58h19.16c.67 0 1.12-.27 1-.58l-1.17-3.15c-.12-.29-.71-.52-1.33-.52zM139.45 124.71h-7.19c-.62 0-1 .23-.92.51l1.26 3.15c.13.31.78.58 1.44.58h7.75c.67 0 1.06-.27.88-.58l-1.81-3.15a1.82 1.82 0 00-1.41-.51zM142.06 113.71h-5.73c-.49 0-.73.26-.54.58l1.75 2.91.48.79.89 1.49a1.72 1.72 0 001.27.41h6.54c.56 0 .87-.19.7-.41l-1.15-1.48-.61-.79-2.26-2.91a1.9 1.9 0 00-1.34-.59zM147.13 120.44h-6.61c-.56 0-.82.35-.55.79l2.4 4 .72 1.19 1.17 2a2.06 2.06 0 001.56.58h7.73c.66 0 1-.26.76-.58l-1.52-2-.92-1.19-3.09-4a2.34 2.34 0 00-1.65-.79zM143.3 111.31H47.25a2.19 2.19 0 01-2.25-1.86l-4.41-60a2.06 2.06 0 012.12-2.21h105.11a2.07 2.07 0 012.12 2.21l-4.41 60a2.19 2.19 0 01-2.23 1.86z"
                />
                <path
                  d="M145.45 50.76H45.09a1.94 1.94 0 00-2 2l3.87 54.83a2.06 2.06 0 002.14 1.71h92.43a2 2 0 002.13-1.71l3.87-54.83a1.93 1.93 0 00-2.08-2z"
                  fill="#f7f7f7"
                />
                <path
                  fill="#ccc"
                  d="M137.53 93.85L139.82 54.35 56.19 54.35 56.1 54.36 58.23 93.85 137.53 93.85z"
                />
                <path
                  className="cls-9"
                  d="M63.13 58.4H74c6.44 0 11.72 2.35 12 9.38.2 6.57-4.82 9.43-10.84 9.43h-4l.62 9h-6.29zm11.29 13.87c3.58 0 5.23-1.54 5.09-4.49s-2.09-4.11-5.6-4.11h-3.7l.59 8.6zM102.34 79.94h-8.63l-1.62 6.28h-6.41l8.39-27.82h8.09l8.49 27.82H104zm-1.28-4.79l-.64-2.54c-.8-2.79-1.6-6.15-2.36-9.16h-.18c-.71 3.06-1.45 6.37-2.23 9.16L95 75.15zM118.16 76.75L110 58.4h7.22l2.31 6.74c.7 2.16 1.36 4.11 2 6.27h.18c1-2.16 1.88-4.11 2.82-6.27l3.12-6.74h7l-10.07 18.35-.6 9.47h-6.27z"
                />
                <rect
                  className="cls-9"
                  x={32.73}
                  y={91.62}
                  width={73.65}
                  height={44.82}
                  rx={3.78}
                />
                <path className="cls-2" d="M32.73 95.71H106.38V102.99H32.73z" />
                <path
                  className="cls-2"
                  d="M33.19 104.84H105.75999999999999V115H33.19z"
                />
                <path
                  className="cls-10"
                  d="M33.81 106.23H105.57000000000001V107.31H33.81z"
                />
                <path
                  className="cls-10"
                  d="M33.81 108.39H105.57000000000001V109.47H33.81z"
                />
                <path
                  className="cls-10"
                  d="M33.81 110.55H105.57000000000001V111.63H33.81z"
                />
                <path
                  className="cls-10"
                  d="M33.81 112.71H105.57000000000001V113.78999999999999H33.81z"
                />
                <path
                  className="cls-11"
                  d="M89.08 111.35h1.32l-1.73-3.7h-1.06l-.28-.62a2.58 2.58 0 001.12-.41h.77l2.25 4.73h1.14l.41.86h-3.55zM93.58 111.61c.82-1.51 1.31-2.47.88-3.29a1.59 1.59 0 00-1.38-.95.81.81 0 00-.78.58l-.83-.56a1.29 1.29 0 011.36-.77 3 3 0 012.57 1.66c.49 1 .09 2-.42 3.12.28 0 .63-.06.91-.06h1.36l.46.87h-3.83zM98.08 110.88a3.08 3.08 0 001.62.62c.59 0 .83-.31.54-.83s-.85-.93-2.08-.94l-.38-.72c1 0 1.2-.34.93-.83a1.37 1.37 0 00-1.16-.71.83.83 0 00-.81.47l-.81-.6a1.33 1.33 0 011.25-.62 2.88 2.88 0 012.46 1.41c.32.59.19 1-.26 1.21a2.93 2.93 0 011.85 1.36c.55 1 0 1.6-1 1.6a4 4 0 01-2.29-.8z"
                />
                <path
                  d="M50.82 123.92a6.07 6.07 0 11-6.07-6.07 6.06 6.06 0 016.07 6.07z"
                  fill="#ffbf00"
                />
                <path
                  className="cls-13"
                  d="M56.49 123.92a6.07 6.07 0 11-6.07-6.07 6.07 6.07 0 016.07 6.07zM98.84 122.3H64a2.63 2.63 0 000 5.26h34.84a2.63 2.63 0 000-5.26z"
                />
                <path
                  d="M170.2 126.5c0 .14-.32.44-.41.54l-.79 1c-.8 1.06-.29 1.22-1.09 2.27-1.95 2.59-4.3 4.86-6.25 7.44l-2.16 2.85c-.13.17-.6 1-.81 1s-.44-.27-.54-.33-.51-.3-1-.55a17.71 17.71 0 00-2.39-1.12c-.38-.11-7.77-.93-8.53-1.41-.93-.58-1.78-1.35-2.66-2l-3.65-2.76c-.27-.21-.58-.41-.84-.64a3.13 3.13 0 01-1.15-2.7 2 2 0 011.28-1.57 2.61 2.61 0 011.63.45 11 11 0 011.9 1.3c.77.62 1.25.64 1.25.36s-.81-.79-1.06-1L126.09 117c-.47-.36-1-.7-1.45-1.11a1 1 0 01-.3-.6 1.08 1.08 0 010-.19v-.42a2.92 2.92 0 012-2.7l.39-.11a1.55 1.55 0 01.48 0 1 1 0 01.53.19c.28.2.54.41.81.61 1 .78 11.72 9 12.37 9.36s.86-.23.44-.62-.93-.7-1.38-1a26.23 26.23 0 01-3-2.44c-.7-1.16.36-3 1.54-3.39a2.33 2.33 0 012.18.44l1.78 1.34a12.15 12.15 0 001.36 1c.45.25.66 0 .7-.44s-1.57-1.8-2.12-2.22a2.79 2.79 0 01-1.27-2A2.55 2.55 0 01143 110a2.11 2.11 0 012 .57c.61.47 2.84 2.39 3.26 1.9.19-.21-.53-.87-.73-1a2.21 2.21 0 01-.32-3 2.55 2.55 0 012.4-.9.08.08 0 01.07 0h.07c.58.26 6.45 4.83 8.9 6.68l2.74 2.07a8.22 8.22 0 012.42 3.76 33.59 33.59 0 002.11 3c.08.1 1.73 1.36 2.89 2.24l1 .79c.19.16.41.25.39.39z"
                  fill="#e7b088"
                />
                <path
                  className="cls-10"
                  transform="rotate(-52.89 164.762 134.365)"
                  d="M153.6 132.19H175.88V136.55H153.6z"
                />
                <path
                  fill="#808082"
                  d="M184.5 132.27L174.47 123.86 157.63 146.13 167.93 153.68 184.5 132.27z"
                />
                <path
                  d="M128.81 115.66c-.54 1-2 1.1-3.22.27l-1-.7-.25-.18v-.42a2.92 2.92 0 012-2.7l.39-.11.82.56c1.22.82 1.79 2.31 1.26 3.28z"
                  fill="#f1cdb5"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(Pay);
