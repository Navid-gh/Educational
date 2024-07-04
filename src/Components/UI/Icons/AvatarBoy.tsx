import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125 125"
      {...props}
      id={id}
    >
      <defs>
        <style>{` #${id} .cls-2{fill:#fff}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle
            cx={62.5}
            cy={62.5}
            r={62.5}
            transform="rotate(-77.08 62.505 62.502)"
            fill="#ffe09c"
          />
          <ellipse
            className="cls-2"
            cx={62.5}
            cy={54.51}
            rx={24.31}
            ry={33.67}
          />
          <path
            className="cls-2"
            d="M62.12 86c-20.36 0-38.55 4.9-50.65 12.57a62.47 62.47 0 00101.82.33C101.19 91.05 82.77 86 62.12 86z"
          />
          <rect
            className="cls-2"
            x={49.51}
            y={62.5}
            width={25.98}
            height={39.69}
            rx={9.62}
          />
          <path
            className="cls-2"
            d="M42 56.42c.72 5.4-.47 10.08-2.68 10.46s-4.59-3.7-5.31-9.1.47-10.08 2.67-10.46S41.3 51 42 56.42zM83 56.42c-.72 5.4.47 10.08 2.68 10.46s4.59-3.7 5.31-9.1-.47-10.08-2.67-10.46S83.7 51 83 56.42z"
          />
          <path
            className="cls-2"
            d="M39 53.18L36.58 37c-.29-2-.58-4 .13-5.87s2.81-3.31 4.67-2.62c-.74-3.75 3.41-6.52 7-7.76a41.92 41.92 0 0118.91-2.33 27.34 27.34 0 0116.84 8.4A15.14 15.14 0 0187.32 32c1.24 3.7.45 7.74-.35 11.55-.64 3-1.28 6.07-1.91 9.11a4.11 4.11 0 01-.78 1.94 4.13 4.13 0 01-3.16.91L45 55.56c-2.27 0-5.23-.56-5.53-2.8"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
