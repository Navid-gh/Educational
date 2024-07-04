import { useState } from "react";

const useClickActive = (initialState: boolean = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return { isActive, toggleActive };
};

export default useClickActive;
