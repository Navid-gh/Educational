import { useState } from "react";
import LoginComp from "../Components/LoginComp";
import SignupComp from "./SignupComp";
import { cn } from "../utils/lib/Cn";

const TabController = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col bg-white w-[50%] min-w-[28rem] rounded-3xl hero:min-w-[20rem]">
      <div className="flex">
        <span
          className={cn(
            "p-4 flex-1 bg-[#f1dcfc] text-xl transition-all duration-300 flex items-center justify-center font-bold  rounded-tr-3xl border-b border-b-pink cursor-pointer",
            {
              "bg-white": !isLogin,
            }
          )}
          onClick={() => setIsLogin(false)}
        >
          ثبت نام
        </span>
        <span
          className={cn(
            "p-4 flex-1 bg-[#f1dcfc] text-xl transition-all duration-300 flex items-center justify-center font-bold  rounded-tl-3xl border-b border-b-pink cursor-pointer",
            {
              "bg-white": isLogin,
            }
          )}
          onClick={() => setIsLogin(true)}
        >
          ورود
        </span>
      </div>
      <div>{isLogin ? <LoginComp /> : <SignupComp />}</div>
    </div>
  );
};

export default TabController;
