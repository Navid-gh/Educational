import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../utils/lib/Cn';
import Close from './UI/Icons/Close';

interface Props {
  children: React.ReactNode;
  zIndex: number;
  parentStateControl?: boolean;
}

const Popup = ({ children, zIndex, parentStateControl = true }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      /*
            i did use handleRemoveListener here but it has some problem, whenever i was switching between pages
            this was triggered and removed the listener(because of the clicking the link) even after initial mount of effect
            it was weird and i think this was happening due cycle of the effects of the new mounted component
            */
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('click', handleClickOutside);
    }
    /*
        The event listener is only added when isActive is true. 
        If the popup is closed or the component is unmounted, the listener is removed.
        because state change cause a rerender and this effect will 
        executed and listener won't be added also the return function of the past effect will be called
        */
    return () => {
      handleRemoveListener();
    };
  }, [isActive, handleClickOutside]);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleRemoveListener = () => {
    document.removeEventListener('click', handleClickOutside);
  };

  return (
    <div
      ref={popupRef}
      style={{ zIndex }}
      className={cn(
        `flex items-center justify-center p-4 rounded-xl bg-[#fff] transition-all duration-300 delay-100 shadow-main fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 pointer-events-none`,
        {
          'opacity-100 scale-100 pointer-events-auto':
            parentStateControl && isActive,
        },
      )}
    >
      <Close
        className="w-3 h-3 absolute top-2 right-2 cursor-pointer"
        onClick={() => {
          setIsActive(!isActive);
          handleRemoveListener();
        }}
      />
      {children}
    </div>
  );
};

export default Popup;
