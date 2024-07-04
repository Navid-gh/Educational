import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const AvatarBoy: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63 63"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-1{fill:#292a33}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Aparat">
            <path
              className="cls-1"
              d="M27.19 1.87L21.39.33A9.77 9.77 0 009.45 7.25L8 12.72A29.88 29.88 0 0127.19 1.87zM1.75 36.26L.33 41.61a9.77 9.77 0 006.92 11.94L12.81 55A29.87 29.87 0 011.75 36.26zM55.75 9.45L49.53 7.8A29.87 29.87 0 0161 27.81l1.71-6.42a9.77 9.77 0 00-6.96-11.94zM35.67 61.09l5.94 1.58a9.77 9.77 0 0011.94-6.92l1.67-6.31a29.87 29.87 0 01-19.55 11.65z"
            />
            <path
              d="M31.5 4.19A27.31 27.31 0 1058.81 31.5 27.31 27.31 0 0031.5 4.19zM16 17.81A7.81 7.81 0 1122.22 27 7.8 7.8 0 0116 17.81zm11.35 23.6a7.8 7.8 0 11-6.18-9.13 7.79 7.79 0 016.21 9.13zm3.35-6.31a3.47 3.47 0 114.06-2.75 3.46 3.46 0 01-4.06 2.75zM47 45.19a7.81 7.81 0 11-6.19-9.14A7.8 7.8 0 0147 45.19zm-5.2-14.47a7.8 7.8 0 119.14-6.18 7.79 7.79 0 01-9.14 6.18z"
              fill="#ec145a"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(AvatarBoy);
