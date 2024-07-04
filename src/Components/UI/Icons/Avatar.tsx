import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 454.72 570.4"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-1{fill:#fff}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="objects">
          <path
            className="cls-1"
            d="M454.72 468.59c0 69.31-101.79 101.81-227.36 101.81S0 533.73 0 468.59a227.16 227.16 0 01102.48-190 176.65 176.65 0 00249.76 0 227.16 227.16 0 01102.48 190z"
          />
          <circle className="cls-1" cx={227.36} cy={153.61} r={153.61} />
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
