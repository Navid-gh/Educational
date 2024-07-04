import { useEffect, useState, useRef } from "react";

export const useCountdown = (targetTime: number) => {
  const [countDown, setCountDown] = useState(targetTime);
  const [startCounting, setStartCounting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const setIntervalHandler = () => {
    intervalRef.current = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 0) {
          clearInterval(intervalRef.current);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (startCounting) {
      setIntervalHandler();
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = -1;
    };
  }, [startCounting]);

  const resetCounter = () => {
    setCountDown(targetTime);
    setIntervalHandler();
  };

  return { countDown, setStartCounting, resetCounter };
};
