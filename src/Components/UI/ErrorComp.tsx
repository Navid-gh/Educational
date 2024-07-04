import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ErrorComp = () => {
  useEffect(() => {
    toast.error("خطا در برقراری ارتباط");
  }, []);
  return (
    <div>
      <Toaster />
    </div>
  );
};

export default ErrorComp;
