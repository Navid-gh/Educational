import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" {...props}>
      <defs>
        <linearGradient
          id="telegram-linear-gradient"
          x1={31.5}
          y1={63}
          x2={31.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0093d4" />
          <stop offset={1} stopColor="#00b1e5" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <circle
            cx={31.5}
            cy={31.5}
            r={31.5}
            fill="url(#telegram-linear-gradient)"
          />
          <path
            d="M21.32 33.8l3.74 10.35s.47 1 1 1S34 37.37 34 37.37l8.27-16-20.81 9.76z"
            fill="#c1daea"
          />
          <path
            d="M26.28 36.46l-.72 7.62s-.3 2.34 2 0 4.57-4.14 4.57-4.14z"
            fill="#9cc6d9"
          />
          <path
            d="M21.39 34.17l-7.69-2.5s-.91-.38-.62-1.22c.06-.18.18-.32.55-.58C15.33 28.68 45.16 18 45.16 18a2.54 2.54 0 011.34-.09.7.7 0 01.49.54 2.35 2.35 0 01.07.68v.66c-.19 2.93-5.62 24.81-5.62 24.81s-.33 1.28-1.49 1.32a2.12 2.12 0 01-1.56-.6c-2.28-2-10.19-7.28-11.93-8.45a.34.34 0 01-.15-.23c0-.12.11-.28.11-.28s13.72-12.27 14.09-13.55c0-.1-.08-.15-.22-.11-.92.3-16.76 10.3-18.51 11.45a.9.9 0 01-.39.02z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
