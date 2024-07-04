import { useRef, useState } from "react";
import MainInput from "./UI/MainInput";
import MainButton from "./UI/MainButton";
import toast from "react-hot-toast";
import { checkUser } from "../api/auth/Register";
import useInputValidator from "../hooks/useInputValidator";
import { useCountdown } from "../hooks/useCountDown";
import ConfirmCode from "./ConfirmCode";
import axios, { AxiosError } from "axios";

const LoginComp = () => {
  const [persisitingPhone, setPersisitingPhone] = useState("");
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const { countDown, setStartCounting, resetCounter } = useCountdown(120);

  const checkUserHandler = async () => {
    const phoneMsg = useInputValidator(phoneRef.current?.value, "phone");
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }
    const loader = toast.loading("در حال ارسال اطلاعات");
    try {
      await checkUser({
        phone: phoneRef.current!.value,
      });
      toast.success("کد برای شما ارسال شد");
      setPersisitingPhone(phoneRef.current!.value);
      setStartCounting(true);
    } catch (error) {
      const errors = error as Error | AxiosError;
      if (!axios.isAxiosError(errors)) {
        // do whatever you want with native error
      } else {
        if (errors.response?.status === 404) {
          toast.error("کاربر یافت نشد");
        } else {
          toast.error("خطا در برقراری ارتباط");
        }
      }
      console.log(error);
    } finally {
      toast.dismiss(loader);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 px-8">
      {persisitingPhone !== "" ? (
        <ConfirmCode {...{ countDown, resetCounter, persisitingPhone }} />
      ) : (
        <>
          <MainInput
            label="شماره موبایل"
            id="mobile"
            intent="login"
            inputSize="base"
            ref={phoneRef}
            key={"phone"}
          />
          <MainButton
            intent="purple"
            size="login"
            text="دریافت کد یکبار مصرف"
            onClick={checkUserHandler}
          />
        </>
      )}
    </div>
  );
};

export default LoginComp;
