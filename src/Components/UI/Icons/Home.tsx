import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Home: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.02 34" {...props}>
      <path
        d="M32.77 12.83L22 2.07a7.1 7.1 0 00-10 0L1.25 12.83a4.21 4.21 0 00-1.25 3v13.92A4.25 4.25 0 004.25 34h25.52A4.25 4.25 0 0034 29.75V15.83a4.21 4.21 0 00-1.23-3zM21.26 31.16h-8.5v-5.57a4.25 4.25 0 118.5 0zm9.93-1.41a1.42 1.42 0 01-1.42 1.41H24.1v-5.57a7.09 7.09 0 00-14.18 0v5.57H4.25a1.41 1.41 0 01-1.41-1.41V15.83a1.45 1.45 0 01.41-1L14 4.08a4.26 4.26 0 016 0l10.77 10.75a1.51 1.51 0 01.42 1z"
        data-name="Layer 2"
      />
    </svg>
  );
};

export default memo(Home);
