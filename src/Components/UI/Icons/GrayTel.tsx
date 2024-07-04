import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const GrayTel: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      {...props}
    >
      <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-38C10.1 2 2 10.1 2 20s8.1 18 18 18 18-8.1 18-18S29.9 2 20 2z" />
      <path
        fillRule="evenodd"
        d="M16.7 24.1l9.3-8.4c.4-.4-.1-.5-.6-.2L14 22.7l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6l19.3-7.4c.9-.4 1.7.2 1.4 1.6l-3.3 15.5c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.7.3-.7 0l-.1-4.7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default memo(GrayTel);
