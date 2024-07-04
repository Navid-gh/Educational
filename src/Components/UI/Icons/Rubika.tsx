import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55.65 63"
      {...props}
      id={id}
    >
      <defs>
        <style>
          {`#${id} .cls-1{fill:#7eb427}#${id} .cls-2{fill:#b8cd06}#${id} .cls-3{fill:#f4a926}#${id} .cls-4{fill:#ee7617}#${id} .cls-5{fill:#e54d52}#${id} .cls-6{fill:#4d3884}#${id} .cls-7{fill:#7a4587}#${id} .cls-8{fill:#5bd5bd}#${id} .cls-9{fill:#38ad9c}`}
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Robika">
            <path
              className="cls-1"
              d="M27.12 49.29V63a2.74 2.74 0 01-.67-.26l-11.32-6.53z"
            />
            <path
              className="cls-2"
              d="M40.62 56.21L29.4 62.69l-.1.05a2.67 2.67 0 01-.66.26V49.29z"
            />
            <path
              className="cls-3"
              d="M41.38 41.05L41.38 54.89 29.79 48.19 29.4 47.97 41.38 41.05z"
            />
            <path
              className="cls-4"
              d="M54.78 47.91a3.51 3.51 0 01-.65.5L42.9 54.89V41.05z"
            />
            <path
              className="cls-5"
              d="M55.65 32.82v13a3.24 3.24 0 01-.11.82l-11.88-6.9z"
            />
            <path
              className="cls-6"
              d="M54.89 31.5L42.9 38.42 42.9 24.58 54.89 31.5z"
            />
            <path
              className="cls-7"
              d="M55.65 17.22v13l-12-6.92 11.88-6.85a3.16 3.16 0 01.12.77z"
            />
            <path
              className="cls-8"
              d="M54.78 15.09L42.9 21.94V8.11l11.23 6.48a3.51 3.51 0 01.65.5z"
            />
            <path
              className="cls-9"
              d="M41.38 8.11L41.38 21.94 29.4 15.03 41.38 8.11z"
            />
            <path
              className="cls-1"
              d="M40.62 6.79l-12 6.92V0a3.19 3.19 0 01.74.3z"
            />
            <path
              className="cls-2"
              d="M27.12 0v13.71l-12-6.92L26.35.32a3.19 3.19 0 01.77-.32z"
            />
            <path
              className="cls-3"
              d="M26.36 15.03L14.37 21.94 14.37 8.11 26.36 15.03z"
            />
            <path
              className="cls-4"
              d="M12.85 8.11v13.83L1 15.09a3.21 3.21 0 01.65-.5z"
            />
            <path
              className="cls-5"
              d="M12.09 23.36L0 30.09l.2-13a3.12 3.12 0 01.13-.81z"
            />
            <path
              className="cls-7"
              d="M12.85 24.58L12.85 38.42 0.87 31.5 12.85 24.58z"
            />
            <path
              className="cls-6"
              d="M12.09 39.74L.22 46.59a3.24 3.24 0 01-.11-.82v-13z"
            />
            <path
              className="cls-8"
              d="M12.85 41.05v13.84L1.63 48.41a3.21 3.21 0 01-.65-.5l4.54-2.62z"
            />
            <path
              className="cls-9"
              d="M26.36 47.97L25.97 48.19 14.37 54.89 14.37 41.05 26.36 47.97z"
            />
            <path
              fill="#e3e3e3"
              d="M27.12 31.94L27.12 46.65 15.13 39.74 14.37 39.3 14.37 24.58 27.12 31.94z"
            />
            <path
              fill="#efeeef"
              d="M41.38 24.58L41.38 39.3 40.62 39.74 28.64 46.65 28.64 31.94 41.38 24.58z"
            />
            <path
              fill="#fdfdfd"
              d="M40.62 23.26L27.88 30.62 15.13 23.26 27.12 16.34 27.88 15.9 28.64 16.34 40.62 23.26z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
