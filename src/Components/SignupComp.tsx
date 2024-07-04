import { useRef, useState } from "react";
import MainInput from "./UI/MainInput";
import MainButton from "./UI/MainButton";
import { register } from "../api/auth/Register";
import toast from "react-hot-toast";
import useInputValidator from "../hooks/useInputValidator";
import ConfirmCode from "./ConfirmCode";
import { useCountdown } from "../hooks/useCountDown";
import axios, { AxiosError } from "axios";

const SignupComp = () => {
  const [persisitingPhone, setPersisitingPhone] = useState("");
  const fnameRef = useRef<HTMLInputElement | null>(null);
  const lnameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const { countDown, setStartCounting, resetCounter } = useCountdown(120);

  const registerHandler = async () => {
    const fnameMsg = useInputValidator(fnameRef.current?.value);
    if (fnameMsg) {
      toast.error(fnameMsg);
      return;
    }
    const lnameMsg = useInputValidator(lnameRef.current?.value);
    if (lnameMsg) {
      toast.error(lnameMsg);
      return;
    }
    const phoneMsg = useInputValidator(phoneRef.current?.value, "phone");
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }
    const loader = toast.loading("در حال ارسال اطلاعات");
    try {
      await register({
        first_name: fnameRef.current!.value,
        last_name: lnameRef.current!.value,
        phone: phoneRef.current!.value,
      });
      toast.success("ثبت نام با موفقیت انجام شد");
      setPersisitingPhone(phoneRef.current!.value);
      setStartCounting(true);
    } catch (error) {
      const errors = error as Error | AxiosError;
      if (!axios.isAxiosError(errors)) {
        // do whatever you want with native error
      } else {
        if (errors.response?.status === 401) {
          toast.error("شما قبلا با این شماره ثبت نام کرده اید");
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
    <>
      {persisitingPhone !== "" ? (
        <ConfirmCode {...{ countDown, resetCounter, persisitingPhone }} />
      ) : (
        <div className="flex flex-col gap-12 p-4 px-8">
          <div className="flex flex-col gap-3">
            <MainInput
              label="نام"
              id="fname"
              intent="login"
              inputSize="base"
              key="1"
              ref={fnameRef}
            />
            <MainInput
              label="نام خانوادگی"
              id="lname"
              intent="login"
              inputSize="base"
              key="2"
              ref={lnameRef}
            />
            <MainInput
              label="شماره موبایل"
              id="mobile"
              intent="login"
              inputSize="base"
              key="3"
              ref={phoneRef}
            />
          </div>
          <MainButton
            intent="purple"
            size="login"
            text="ثبت نام"
            onClick={registerHandler}
          />
        </div>
      )}
    </>
  );
};

export default SignupComp;
