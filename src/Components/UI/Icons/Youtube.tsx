import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" {...props}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <circle cx={31.5} cy={31.5} r={31.5} fill="#fd0000" />
          <path
            d="M51.62 21.39a5.23 5.23 0 00-3.71-3.71c-3.28-.88-16.41-.88-16.41-.88s-13.13 0-16.41.88a5.23 5.23 0 00-3.71 3.71c-.88 3.28-.88 10.11-.88 10.11s0 6.83.88 10.11a5.23 5.23 0 003.71 3.71c3.28.88 16.41.88 16.41.88s13.13 0 16.41-.88a5.23 5.23 0 003.71-3.71c.88-3.28.88-10.11.88-10.11s0-6.83-.88-10.11zM27.3 37.8V25.2l10.91 6.3z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
