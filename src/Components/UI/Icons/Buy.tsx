import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const BuyIcon: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32.8"
      {...props}
      id={id}
    >
      <defs>
        <style>{` #${id} .cls-1{fill:#100303}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Illustration">
          <g id="shop">
            <path
              className="cls-1"
              d="M31.05 5.57A4.12 4.12 0 0027.9 4.1H5.8l-.06-.48A4.1 4.1 0 001.67 0h-.3a1.37 1.37 0 100 2.73h.3A1.37 1.37 0 013 3.94l1.88 16a6.83 6.83 0 006.79 6H26a1.37 1.37 0 100-2.73H11.7a4.11 4.11 0 01-3.86-2.71h16.29a6.83 6.83 0 006.73-5.62l1.07-6a4.08 4.08 0 00-.88-3.31zm-1.8 2.87l-1.07 6a4.12 4.12 0 01-4.05 3.37H7.41L6.12 6.83H27.9a1.37 1.37 0 011.37 1.36 1 1 0 01-.02.25z"
            />
            <circle className="cls-1" cx={9.57} cy={30.07} r={2.73} />
            <circle className="cls-1" cx={23.24} cy={30.07} r={2.73} />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(BuyIcon);
