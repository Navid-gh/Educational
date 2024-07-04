import { useEffect, useRef } from "react";

const useThrottleFunc = <T extends unknown[], R>(
  func: (...args: T) => R,
  limit: number
): ((...args: T) => void) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const lastRan = useRef<number>(Date.now());

  const throttledFunc = (...args: T) => {
    if (!timeoutRef.current && Date.now() - lastRan.current >= limit) {
      timeoutRef.current = setTimeout(() => {
        func(...args);
        timeoutRef.current = undefined;
      }, limit - (Date.now() - lastRan.current));
    }
  };
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledFunc;
};

export default useThrottleFunc;
