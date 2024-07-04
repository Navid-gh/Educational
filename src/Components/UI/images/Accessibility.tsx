import { SVGProps, FC, memo } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Accessibility: FC<SVGElementProps> = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 208 208.47"
      {...props}
      id={id}
    >
      <defs>
        <style>
          {` #${id} .cls-2{fill:#e6e6e6} #${id} .cls-4{fill:#5b0888} #${id} .cls-5{fill:#7a0cc1} #${id} .cls-6{fill:#ffbf00} #${id} .cls-7{fill:#fff} #${id} .cls-8{fill:#ccc}`}
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="_1" data-name={1}>
            <g id="_1-2" data-name={1}>
              <path
                className="cls-2"
                d="M208 104c0 3.12-.13 6.2-.41 9.24A103.93 103.93 0 01104 208c-3.45 0-6.9-.17-10.28-.5A104 104 0 11206.17 84.6 102.45 102.45 0 01208 104z"
              />
              <path
                d="M171.52 91.89L95.81 208.47a104 104 0 01-93.22-85.76l59.93-75.82c-2.15 14.21 101.07 53.34 109 45z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#c1c0c6"
                opacity={0.7}
              />
              <g id="_1-3" data-name={1}>
                <path
                  className="cls-4"
                  d="M155.94 75.21a43.68 43.68 0 01-1 18.55 70.09 70.09 0 01-5.8 15l12.47 12.67a59.73 59.73 0 00-5.67-46.22zM109.11 148.88l12.76 13a59 59 0 0023.21-13.45l-14.74-15a94.73 94.73 0 01-21.23 15.45zM104.39 107l-18.53 18.25L107 146.71a91.84 91.84 0 0021.33-15.37zM145.77 62.23c-9.49-8.42-25.73-7.85-42.26.17l20.7 21 21.56-21.22z"
                />
                <path
                  className="cls-4"
                  d="M147.82 64.31l-21.57 21.22 20.7 21c8.29-16.36 9.13-32.59.87-42.22zM132.42 131.38l14.74 15a59.07 59.07 0 0013.42-21.78l-12.93-13.14a95.76 95.76 0 01-15.23 19.92zM80.51 78.6l23.91 24.31 17.71-17.42-21.35-21.71A92.72 92.72 0 0080.51 78.6zM130.38 129.3a92.69 92.69 0 0015.14-20l-21.35-21.73L106.46 105zM78.46 76.52a95.61 95.61 0 0120.19-14.9L85.72 48.47a59.13 59.13 0 00-22 13.06l14.73 15zM61.65 63.58a59 59 0 00-13.83 23l12.75 13a95.22 95.22 0 0115.82-21zM78.43 80.64a91.91 91.91 0 00-15.71 21.07l21.1 21.46L102.34 105z"
                />
                <path
                  className="cls-5"
                  d="M61 145.63l20.75-20.42-20.43-20.76c-7.79 16.03-8.42 31.76-.32 41.18z"
                />
                <path
                  className="cls-5"
                  d="M52.86 134.72a43.8 43.8 0 011-18.54 69.24 69.24 0 015.26-13.93L46.88 89.77a59.73 59.73 0 005.98 44.95zM104.21 148.06l-20.42-20.77L63 147.7c9.32 8.24 25.05 7.87 41.21.36z"
                />
                <path
                  className="cls-5"
                  d="M73.8 156a59.73 59.73 0 0044.85 6.73l-12.28-12.48a69 69 0 01-14 5 43.8 43.8 0 01-18.57.75z"
                />
                <path
                  className="cls-4"
                  d="M135.3 53.86a43.64 43.64 0 00-18.56.6 70.37 70.37 0 00-15.14 5.44L89.22 47.15a59.7 59.7 0 0146.08 6.71z"
                />
                <path
                  className="cls-6"
                  d="M105.29 138.67a44.56 44.56 0 01-3.41 3.27c4.28.21 15.29-1.9 25.66-6.4 10.44-4.26 20.24-10.91 23.84-14.26a60.83 60.83 0 01-12.36 11 85.08 85.08 0 01-39.6 14.5 23.44 23.44 0 001.12 3.1c-7.19-1.49-12.38-4.44-15.69-8a51.29 51.29 0 0020.44-3.21zM52.08 104.84a30.09 30.09 0 01-3.6-2.16c-1 3.48-.28 11.95 3.65 19.47 3.62 7.64 10.42 14.33 14.07 16.62a41.55 41.55 0 01-11.87-8c-6.11-5.87-12.63-15.95-11.58-29.23-1.39.43-2.79.91-4.18 1.45a37.72 37.72 0 0113-14 23.5 23.5 0 00.51 15.85zM158.22 89.9a30 30 0 013.59 2.16c1-3.48.29-12-3.65-19.48C154.55 65 147.75 58.27 144.09 56A41.55 41.55 0 01156 64c6.12 5.87 12.63 16 11.58 29.22 1.4-.42 2.79-.9 4.18-1.44a37.56 37.56 0 01-13.05 14 23.51 23.51 0 00-.49-15.88z"
                />
                <path
                  className="cls-7"
                  d="M54.34 61.25a7.77 7.77 0 017.77-7.77v-6.65a14.42 14.42 0 00-14.43 14.42c0 9.8 14.43 29.21 14.43 29.21V69a7.77 7.77 0 01-7.77-7.75z"
                />
                <path
                  className="cls-8"
                  d="M76.47 60.22a14.41 14.41 0 00-14.36-13.39v6.65a7.77 7.77 0 017.46 5.64 7.88 7.88 0 01.3 2.13A7.79 7.79 0 0162.11 69v21.46S75.6 73 76.48 62.3v-1c0-.29.02-.74-.01-1.08z"
                />
                <path
                  className="cls-2"
                  d="M116.94 71.88a13.67 13.67 0 0113.95-13.43l.22-11.72a25.42 25.42 0 00-25.91 24.92c-.33 17.28 24.45 52 24.45 52l.71-37.79a13.68 13.68 0 01-13.42-13.98z"
                />
                <path
                  d="M156 70.81a25.39 25.39 0 00-24.87-24.08l-.22 11.72a13.66 13.66 0 0113 10.19 13.37 13.37 0 01.46 3.76 13.72 13.72 0 01-13.94 13.43l-.71 37.79s24.28-30.35 26.2-49.15c.06-.63.1-1.25.11-1.85s-.03-1.21-.03-1.81z"
                  fill="#999"
                />
                <path
                  className="cls-7"
                  d="M70.84 108.75a10.29 10.29 0 0110.29-10.28v-8.81A19.09 19.09 0 0062 108.75c0 13 19.1 38.69 19.1 38.69V119a10.29 10.29 0 01-10.26-10.25z"
                />
                <path
                  className="cls-8"
                  d="M100.15 107.4a19.08 19.08 0 00-19-17.74v8.81a10.26 10.26 0 019.85 7.47 10.48 10.48 0 01.4 2.81A10.31 10.31 0 0181.13 119v28.4s17.87-23.15 19-37.3c0-.47.06-.93.06-1.39s-.01-.86-.04-1.31z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(Accessibility);
