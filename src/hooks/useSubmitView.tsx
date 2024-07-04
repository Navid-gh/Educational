import { useEffect } from "react";
import { submitView, getIp } from "../api/view/viewAPI";

const useSubmitView = (type: string, id: string | undefined) => {
  useEffect(() => {
    const handleView = async () => {
      if (id) {
        try {
          const ip = await getIp();
          await submitView({ id, ip, type });
        } catch (error) {
          // console.error("Error fetching IP:", error);
        }
      }
    };

    handleView();
  }, []);
};

export default useSubmitView;
