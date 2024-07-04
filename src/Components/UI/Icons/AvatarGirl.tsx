import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarGirl: FC<SVGElementProps> = ({ id, ...props }) => {
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
          <circle cx={62.5} cy={62.5} r={62.5} fill="#e5cff7" />
          <ellipse
            className="cls-2"
            cx={62.5}
            cy={52.26}
            rx={24.31}
            ry={31.43}
          />
          <path
            className="cls-2"
            d="M62.5 86c-19.56 0-36.79 7.06-46.88 17.78a62.45 62.45 0 0093.76 0C99.29 93.09 82.06 86 62.5 86z"
          />
          <rect
            className="cls-2"
            x={51.52}
            y={62.5}
            width={21.96}
            height={39.69}
            rx={9.62}
          />
          <path
            className="cls-2"
            d="M41.54 53.72c1.42 4.08.86 8-1.25 8.71s-5-2-6.38-6.06-.85-8 1.25-8.7 4.97 1.98 6.38 6.05zM83.46 53.72c-1.42 4.08-.86 8 1.25 8.71s5-2 6.38-6.06.85-8-1.25-8.7-4.97 1.98-6.38 6.05z"
          />
          <path
            className="cls-2"
            d="M92.33 56.44c-.54-7.76-.27-15.73-2.77-23.1a30 30 0 00-17.46-18.4 26 26 0 00-24.82 3.65c-2.4 1.9-4.55 4.63-4.31 7.69-4.16-1.41-8.79 1.54-10.74 5.48s-1.85 8.53-1.57 12.92c.81 12.83 2.77 26-.71 38.37l32 1c3.41.1 6.83.2 10.24.06 8.7-.38 17.71-2.34 25.91.61a110 110 0 01-5.77-28.28z"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarGirl);
