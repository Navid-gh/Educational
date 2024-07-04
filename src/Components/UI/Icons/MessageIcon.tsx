import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const MessageIcon: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66.06 66.06"
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
            d="M66.05 31c0-.38-.09-.76-.14-1.15-.1-.84-.2-1.72-.37-2.59a32.63 32.63 0 00-17-23.38A31.25 31.25 0 0035.46.1h-.32L35 0h-4l-1.14.15c-.85.1-1.73.21-2.6.37a32.64 32.64 0 00-23.38 17 31.36 31.36 0 00-3.77 13v4.63l.14 1c.1.76.2 1.51.32 2.26a32 32 0 003.6 10.43c.06.11.08.14 0 .34-1 3-1.92 5.94-2.87 8.91l-1 3.16-.3.26v1.63l.06.17A4.15 4.15 0 002.75 66l.17.06h1.53l2.18-.72 5.78-1.88.7-.23c1.25-.41 2.55-.84 3.83-1.21h.16a33.61 33.61 0 0011.5 3.8l1.59.2.71.08h4.15l1.15-.14c.85-.1 1.73-.2 2.6-.37a32.64 32.64 0 0023.38-17 31.07 31.07 0 003.77-13v-.19a1.6 1.6 0 00.05-.21V31zM9.35 56.39l1.22-3.8.21-.68c.19-.59.36-1.15.57-1.7a4.22 4.22 0 00-.4-3.82 24.3 24.3 0 01-3.19-8.1 25.16 25.16 0 014.56-20.58 24.94 24.94 0 0116.93-10.2 28.15 28.15 0 014-.31 24.79 24.79 0 0115 5.07 25 25 0 0110 15.44 25 25 0 01-4.35 20.45A25.11 25.11 0 0138.29 58.3a27.09 27.09 0 01-5.46.57 24.78 24.78 0 01-12.3-3.3 6.68 6.68 0 00-3.38-1 6.36 6.36 0 00-2.24.44c-1.73.65-3.48 1.19-5.34 1.77l-.38.12z"
          />
          <path
            className="cls-1"
            d="M20.54 29.09A4 4 0 0016.62 33a4 4 0 003.94 4 4 4 0 003.93-3.93 3.91 3.91 0 00-1.17-2.8 3.78 3.78 0 00-2.78-1.18zM33.07 29.09a4.11 4.11 0 00-2.81 1.15A3.85 3.85 0 0029.09 33 4 4 0 0033 37a3.95 3.95 0 000-7.89zM45.52 29.09a3.95 3.95 0 000 7.89 3.95 3.95 0 000-7.89z"
          />
        </g>
      </g>
    </svg>
  );
};

export default memo(MessageIcon);
