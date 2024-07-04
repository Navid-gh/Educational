import { useState } from "react";

const useCurrentTab = (defaultTab: number = -1) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleMouseEnter = (index: number) => {
    setActiveTab(index);
  };

  const handleClick = (index: number, activeTab: number) => {
    if (!(index === activeTab)) {
      setActiveTab(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveTab(defaultTab);
  };

  return { activeTab, handleMouseEnter, handleMouseLeave, handleClick };
};

export default useCurrentTab;
