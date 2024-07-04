import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" {...props}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M63 31.5a31.5 31.5 0 10-36.42 31.12v-22h-8V31.5h8v-6.94c0-7.89 4.7-12.26 11.9-12.26a48.17 48.17 0 017.05.62v7.75h-4c-3.92 0-5.14 2.43-5.14 4.92v5.91h8.74l-1.4 9.11h-7.31v22A31.52 31.52 0 0063 31.5z"
            fill="#1677f0"
          />
          <path
            d="M43.76 40.61l1.4-9.11h-8.74v-5.91c0-2.49 1.22-4.92 5.14-4.92h4v-7.75a48.17 48.17 0 00-7.05-.62c-7.2 0-11.9 4.37-11.9 12.26v6.94h-8v9.11h8v22a32 32 0 009.84 0v-22z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
