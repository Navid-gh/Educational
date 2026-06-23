import { ReactNode, memo } from 'react';
import { cn } from '../utils/lib/Cn';

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
        'z-10 h-[31.25rem] w-full bg-cover bg-center bg-no-repeat shadow-lg relative flex items-center bg-fixed subHero:bg-local',
        className,
      )}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      {isLanding ? (
        <div className="z-20 home-landing-gradient absolute top-0 left-0 w-full h-full flex items-center justify-start">
          {children}
        </div>
      ) : (
        <>
          {children}
          <div className="-z-10 pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-purple opacity-80 mix-blend-multiply"></div>
        </>
      )}
    </section>
  );
};

export default memo(ParallaxHeader);
