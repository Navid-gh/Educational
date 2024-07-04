import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Hamburger: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.29 45.29"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-2{fill:#100303}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g opacity={0.4} id="sabad_kharid" data-name="sabad kharid">
          <g id="Layer_2-2" data-name="Layer 2">
            <g id="_600" data-name={600}>
              <path
                className="cls-2"
                d="M30.94 29.2L16.88 13.81a1.53 1.53 0 00-2.13.19 1.55 1.55 0 00-.39 2.11l14 15.39a1.59 1.59 0 002.15-.19 1.56 1.56 0 00.43-2.11z"
              />
              <path
                className="cls-2"
                d="M16.41 31.17l14.87-14.59a1.54 1.54 0 00-.28-2.13 1.55 1.55 0 00-2.13-.31L14 28.73a1.54 1.54 0 00.28 2.13 1.57 1.57 0 002.13.31z"
              />
            </g>
          </g>
          <path
            className="cls-2"
            d="M22.65 45.29a22.65 22.65 0 1122.64-22.64 22.67 22.67 0 01-22.64 22.64zm0-42a19.41 19.41 0 1019.41 19.36A19.42 19.42 0 0022.65 3.24z"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(Hamburger);
