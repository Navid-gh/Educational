import { useState, useEffect } from "react";
import useDebounceFunc from "./useDebounceFunc";

const useScrollBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const debouncedScroll = useDebounceFunc(handleScroll, 300); // Adjust the debounce delay as per your needs
  // const throttledScroll = useThrottle(handleScroll, 100); // Uncomment this line for using throttle instead

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { showButton, scrollToTop };
};

export default useScrollBtn;
