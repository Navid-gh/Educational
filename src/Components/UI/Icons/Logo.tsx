import { FC, memo, HtmlHTMLAttributes } from "react";

// type SVGElementProps = SVGProps<SVGSVGElement>;
type DivProps = HtmlHTMLAttributes<HTMLDivElement>;

const LogoIcon: FC<DivProps> = ({ id, ...props }) => {
  return (
    <div id={id} {...props}>
      <img
        className="w-full h-full"
        src="/images/logo-saber.jpg"
        alt="saber zarei logo"
      />
    </div>
  );
  // return (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlnsXlink="http://www.w3.org/1999/xlink"
  //     viewBox="0 0 66.49 66.49"
  //     {...props}
  //     id={id}
  //   >
  //     <defs>
  //       <style>{` #${id} .cls-1{isolation:isolate;} #${id} .cls-2{fill:#642d90;} #${id} .cls-3{fill:#02a89b;} #${id} .cls-4{fill:#ea1e79;} #${id} .cls-5{fill:#f59320;} #${id} .cls-6{opacity:0.23;mix-blend-mode:multiply;} #${id} .cls-7{fill:#01a99c;} #${id} .cls-8{fill:#f69420;} #${id} .cls-9{fill:#d31459;}`}</style>
  //     </defs>
  //     <title>Logo</title>
  //     <g className="cls-1">
  //       <g id="Layer_2" data-name="Layer 2">
  //         <g id="Layer_1-2" data-name="Layer 1">
  //           <polygon
  //             className="cls-2"
  //             points="33.38 33.25 33.25 33.25 33.25 33.18 33.38 33.25"
  //           />
  //           <polygon points="33.38 33.38 33.12 33.38 33.12 32.96 33.44 33.13 33.38 33.38" />
  //           <polygon
  //             className="cls-3"
  //             points="33.25 33.18 33.25 33.25 33.13 33.25 33.25 33.18"
  //           />
  //           <polygon points="33.38 33.38 32.66 33.38 33.38 32.95 33.38 33.38" />
  //           <path
  //             className="cls-4"
  //             d="M66.36,33.25A33.12,33.12,0,0,1,33.25,66.36V63.69a30.49,30.49,0,0,0,19.46-7L50,53.39,33.27,33.25h.11L56.63,45.06,60.42,47a30.55,30.55,0,0,0,3.31-13.74Z"
  //           />
  //           <path d="M33.25,66.49h-.14V63.56h.14a30.4,30.4,0,0,0,19.27-6.92l-2.63-3.17L33,33.11h.42l0,0L60.36,46.81A30.45,30.45,0,0,0,63.6,33.25v-.14h2.89v.14A33.24,33.24,0,0,1,33.25,66.49Zm.13-2.67v2.41A33,33,0,0,0,66.23,33.38H63.86a30.79,30.79,0,0,1-3.32,13.67l-.06.12-3.91-2L33.7,33.56,50.09,53.3l2.8,3.38-.1.08A30.69,30.69,0,0,1,33.38,63.82Z" />
  //           <path
  //             className="cls-2"
  //             d="M63.73,33.25v-.07a30.45,30.45,0,0,0-4.81-16.43l-3.64,2.33-22,14.1,14.4-21.81L50,7.83a30.39,30.39,0,0,0-16.74-5V.13A33.12,33.12,0,0,1,66.36,33.25Z"
  //           />
  //           <path d="M66.49,33.38h-2.9v-.2a30.26,30.26,0,0,0-4.72-16.25l-3.53,2.26-22,14.1-.18-.18L49.81,7.87A30.17,30.17,0,0,0,33.25,2.93h-.14V0h.14A33.24,33.24,0,0,1,66.49,33.25Zm-2.63-.27h2.37A33,33,0,0,0,33.38.26V2.67A30.46,30.46,0,0,1,50.06,7.72l.11.08-2.41,3.64L33.7,32.73,55.21,19,59,16.56l.07.11A30.55,30.55,0,0,1,63.86,33.11Z" />
  //           <path
  //             className="cls-3"
  //             d="M33.25,2.8a30.42,30.42,0,0,0-18.17,6l2.54,3.4,15.63,21L10.39,20.45l-3.78-2.1A30.56,30.56,0,0,0,2.76,33.18v.07H.13A33.12,33.12,0,0,1,33.25.13Z"
  //           />
  //           <path d="M2.9,33.38H0v-.13A33.24,33.24,0,0,1,33.25,0h.13V2.93h-.13a30.46,30.46,0,0,0-18,5.93L33.35,33.1l-.17.19L10.32,20.57l-3.66-2A30.5,30.5,0,0,0,2.9,33.18v.2ZM.26,33.11H2.63A30.65,30.65,0,0,1,6.5,18.29l.06-.12,3.89,2.17L32.77,32.76,14.9,8.8l.1-.08A30.54,30.54,0,0,1,33.11,2.67V.26A33,33,0,0,0,.26,33.11Z" />
  //           <path
  //             className="cls-5"
  //             d="M33.25,63.69v2.67A33.12,33.12,0,0,1,.13,33.25H2.76A30.6,30.6,0,0,0,7.13,48.9l3.64-2.19L33.13,33.25h.06l-15,21.43-2.45,3.5a30.49,30.49,0,0,0,17.49,5.51Z"
  //           />
  //           <path d="M33.38,66.49h-.13A33.24,33.24,0,0,1,0,33.25v-.14H2.9v.14A30.34,30.34,0,0,0,7.18,48.72l3.53-2.12L33.1,33.11h.35l-17.52,25a30.19,30.19,0,0,0,17.3,5.41h.15ZM.26,33.38A33,33,0,0,0,33.11,66.23V63.82a30.51,30.51,0,0,1-17.44-5.53l-.11-.08,2.52-3.6,14.69-21L10.84,46.82,7.09,49.08,7,49A30.63,30.63,0,0,1,2.63,33.38Z" />
  //           <polygon
  //             className="cls-2"
  //             points="33.27 33.25 33.19 33.25 33.23 33.2 33.25 33.22 33.27 33.25"
  //           />
  //           <polygon points="33.55 33.38 32.94 33.38 33.22 32.98 33.55 33.38" />
  //           <g className="cls-6">
  //             <path d="M33.13,33.25h.06l-15,21.43a26.39,26.39,0,0,1-7.42-8Z" />
  //           </g>
  //           <g className="cls-6">
  //             <path d="M17.62,12.23l15.63,21L10.39,20.45A26.17,26.17,0,0,1,17.62,12.23Z" />
  //           </g>
  //           <g className="cls-6">
  //             <path d="M55.28,19.08l-22,14.1,14.4-21.81A26.32,26.32,0,0,1,55.28,19.08Z" />
  //           </g>
  //           <g className="cls-6">
  //             <path d="M56.63,45.06A26.4,26.4,0,0,1,50,53.39L33.27,33.25h.11Z" />
  //           </g>
  //           <path
  //             className="cls-2"
  //             d="M48.82,33.25v0a4.15,4.15,0,0,0-8.29,0v0H33.25V25.88a4.06,4.06,0,1,1,0-8.12V10.39A22.86,22.86,0,0,1,56.1,33.25Z"
  //           />
  //           <path d="M56.23,33.38H48.68v-.16a4,4,0,0,0-8,0v.16H33.11V26a4.19,4.19,0,0,1,0-8.38V10.26h.14a23,23,0,0,1,23,23ZM49,33.11h7A22.72,22.72,0,0,0,33.38,10.53v7.36h-.13a3.93,3.93,0,1,0,0,7.86h.13v7.36h7a4.28,4.28,0,0,1,8.55,0Z" />
  //           <path
  //             className="cls-7"
  //             d="M29.1,21.82a4.11,4.11,0,0,0,4.15,4.06v7.37H26a4.14,4.14,0,0,1-8.28,0H10.39A22.88,22.88,0,0,1,33.25,10.39v7.37A4.11,4.11,0,0,0,29.1,21.82Z"
  //           />
  //           <path d="M21.82,37.41a4.24,4.24,0,0,1-4.27-4H10.26v-.13a23,23,0,0,1,23-23h.13v7.63h-.13a3.93,3.93,0,1,0,0,7.86h.13v7.63H26.09A4.24,4.24,0,0,1,21.82,37.41Zm-11.29-4.3h7.28v.14a4,4,0,0,0,8,0v-.14h7.28V26a4.19,4.19,0,0,1,0-8.38v-7.1A22.71,22.71,0,0,0,10.53,33.11Z" />
  //           <path
  //             className="cls-8"
  //             d="M37.38,44.67a4.1,4.1,0,0,1-4.13,4.06V56.1A22.86,22.86,0,0,1,10.39,33.25h7.29a4.14,4.14,0,0,0,8.28,0h7.29v7.36A4.11,4.11,0,0,1,37.38,44.67Z"
  //           />
  //           <path d="M33.38,56.23h-.13a23,23,0,0,1-23-23v-.14h7.55v.14a4,4,0,0,0,8,0v-.14h7.55v7.37a4.19,4.19,0,0,1,0,8.38ZM10.53,33.38A22.72,22.72,0,0,0,33.11,56V48.6h.14a3.93,3.93,0,1,0,0-7.86h-.14V33.38h-7a4.28,4.28,0,0,1-8.54,0Z" />
  //           <path
  //             className="cls-9"
  //             d="M56.1,33.25A22.84,22.84,0,0,1,33.25,56.1V48.73a4.06,4.06,0,1,0,0-8.12V33.25h7.28v0a4.15,4.15,0,0,1,8.29,0v0Z"
  //           />
  //           <path d="M33.25,56.23h-.14V48.6h.14a3.93,3.93,0,1,0,0-7.86h-.14V33.11H40.4a4.28,4.28,0,0,1,8.55,0h7.28v.14a23,23,0,0,1-23,23Zm.13-7.37V56A22.74,22.74,0,0,0,56,33.38H48.68v-.16a4,4,0,0,0-8,0v.16H33.38v7.1a4.19,4.19,0,0,1,0,8.38Z" />
  //           <circle className="cls-3" cx="4.01" cy="7.61" r="3.5" />
  //           <path d="M4,11.24A3.63,3.63,0,1,1,7.64,7.61,3.64,3.64,0,0,1,4,11.24Zm0-7A3.37,3.37,0,1,0,7.37,7.61,3.37,3.37,0,0,0,4,4.24Z" />
  //           <circle className="cls-2" cx="61.77" cy="7.04" r="3.5" />
  //           <path d="M61.77,10.67A3.63,3.63,0,1,1,65.4,7,3.64,3.64,0,0,1,61.77,10.67Zm0-7A3.37,3.37,0,1,0,65.13,7,3.36,3.36,0,0,0,61.77,3.68Z" />
  //           <circle className="cls-4" cx="62.87" cy="57.98" r="3.5" />
  //           <path d="M62.87,61.6A3.63,3.63,0,1,1,66.49,58,3.63,3.63,0,0,1,62.87,61.6Zm0-7A3.37,3.37,0,1,0,66.23,58,3.37,3.37,0,0,0,62.87,54.61Z" />
  //           <circle className="cls-5" cx="4.01" cy="58.1" r="3.5" />
  //           <path d="M4,61.73A3.63,3.63,0,1,1,7.64,58.1,3.64,3.64,0,0,1,4,61.73Zm0-7A3.37,3.37,0,1,0,7.37,58.1,3.37,3.37,0,0,0,4,54.74Z" />
  //         </g>
  //       </g>
  //     </g>
  //   </svg>
  // );
};

export default memo(LogoIcon);
