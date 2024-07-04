import { ReactNode, memo } from "react";
import { cn } from "../utils/lib/Cn";

type Props = {
  children: ReactNode;
  bg: string;
  className?: string;
  isLanding?: boolean;
};

const ParallaxHeader = ({ children, bg, className, isLanding }: Props) => {
  return (
    <section
      className={cn(
        "h-[31.25rem] w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative inline-block",
        className
      )}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      {isLanding ? (
        <div className="home-landing-gradient absolute top-0 left-0 w-full h-full flex items-center justify-start">
          {children}
        </div>
      ) : (
        <>
          {children}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-purple opacity-80 mix-blend-multiply"></div>
        </>
      )}
    </section>
  );
};

export default memo(ParallaxHeader);
