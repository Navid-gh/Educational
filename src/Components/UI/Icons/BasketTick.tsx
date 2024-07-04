import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const BasketTick: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 30.4" {...props}>
      <g data-name="Layer 2">
        <path
          d="M37.55 4.7L17.06 27.37l-2.31 2.56a2.75 2.75 0 01-3.57-.45L.38 16A3 3 0 011 12.33 2.34 2.34 0 014.34 12l9.13 11L33.89.47a2.31 2.31 0 013.27.53 3.07 3.07 0 01.39 3.7z"
          data-name="sabad kharid"
        />
      </g>
    </svg>
  );
};

export default memo(BasketTick);
