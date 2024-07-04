import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const PhoneIcon: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64.97 66.65"
      {...props}
      id={id}
    >
      <defs>
        <style>{`#${id} .cls-1{fill:#f7f7f7}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g
          id="\u062A\u0645\u0627\u0633_\u0628\u0627_\u0645\u0627"
          data-name="\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"
        >
          <path
            className="cls-1"
            d="M49.26 66.65a15.35 15.35 0 01-2-.61c-3-1.38-6.11-2.69-9-4.24a81.19 81.19 0 01-16-11.17 77.08 77.08 0 01-11.34-12.44 85.41 85.41 0 01-9.65-17.42 13.53 13.53 0 01-1-8 11.11 11.11 0 015.11-7.28 14 14 0 014.51-2 5.93 5.93 0 015.42 1.22 30.76 30.76 0 015.52 6.21 67.06 67.06 0 013.93 6.57c1.55 2.95.37 5.55-1.94 7.33-.4.3-.81.58-1.2.88-2 1.54-2.52 3.2-1.64 5.55a25.11 25.11 0 004.57 7.52 29.4 29.4 0 0010.06 7.35c1.22.57 2.53 1 3.79.29a7.6 7.6 0 001.85-1.86 9 9 0 013.36-2.9 6.27 6.27 0 015.66.19 50.12 50.12 0 015.38 3.39c1.9 1.33 3.74 2.75 5.53 4.22 3 2.48 3.63 5.27 1.79 8.72a15.36 15.36 0 01-11 8.36.86.86 0 00-.16.1zM65 29.45a22.08 22.08 0 01-.26 2.55 2.21 2.21 0 01-2.29 1.75A2.28 2.28 0 0160 32.32a11.62 11.62 0 01-.43-2.32c-.57-5.5-1.85-10.71-5.12-15.26a20.51 20.51 0 00-9-6.91 38.19 38.19 0 00-10.59-2.62c-1.7-.19-2.54-1-2.51-2.41A2.61 2.61 0 0135.12 0a26.76 26.76 0 019.1 1.31 30.35 30.35 0 0116.49 13.25A28.27 28.27 0 0165 29.45z"
          />
          <path
            className="cls-1"
            d="M56.2 28a20.16 20.16 0 01-.16 2.2 2.28 2.28 0 01-2.43 1.91 2.22 2.22 0 01-2.5-1.72c-.22-.92-.26-1.88-.42-2.82a22.85 22.85 0 00-1.88-6.26 11.7 11.7 0 00-7.23-6c-1.84-.6-3.76-1-5.65-1.44-1.12-.27-2.13-.64-2.45-1.92a2.7 2.7 0 012.86-3.51c7.75.64 13.77 4.12 17.64 11A17.4 17.4 0 0156.2 28z"
          />
          <path
            className="cls-1"
            d="M37.85 17.18a10.13 10.13 0 016.66 3.28 10.16 10.16 0 013.26 6.68 7.1 7.1 0 01-.18 2.06 2.34 2.34 0 01-2.25 1.91 2.46 2.46 0 01-2.56-1.61 8.81 8.81 0 01-.41-1.83 5.59 5.59 0 00-4.49-4.88c-.6-.13-1.2-.24-1.77-.42a2.18 2.18 0 01-1.74-1.95 2.69 2.69 0 011.43-2.71 14.34 14.34 0 012.05-.53z"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(PhoneIcon);
