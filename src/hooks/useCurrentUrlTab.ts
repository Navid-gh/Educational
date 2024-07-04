import { useMemo } from "react";
import { UrlTabs } from "../Types/UrlTab";

const useCurrentUrlTab = (tabs: UrlTabs) => {
  const currentTabIndex = useMemo(
    () =>
      tabs.findIndex(
        (item) => item.url === window.location.pathname.substring(1)
      ),
    []
  );
  return currentTabIndex;
};

export default useCurrentUrlTab;
