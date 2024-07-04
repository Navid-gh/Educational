import { useRef, memo } from "react";
import { usePersianNums } from "../hooks/usePersianNums";
import MainInput from "./UI/MainInput";
import MainButton from "./UI/MainButton";
import { login, refreshCode } from "../api/auth/Register";
import useInputValidator from "../hooks/useInputValidator";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { logIn } from "../redux/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  persisitingPhone: string;
  countDown: number;
  resetCounter: () => void;
};

const ConfirmCode = ({ persisitingPhone, countDown, resetCounter }: Props) => {
  const codeRef = useRef<HTMLInputElement | null>(null);
  const Navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/User";
  const dispatch = useAppDispatch();

  const loginHandler = async () => {
    const codeMsg = useInputValidator(codeRef.current?.value, "number");
    if (codeMsg) {
      toast.error(codeMsg);
      return;
    }
    const loader = toast.loading("در حال ارسال اطلاعات");
    try {
      const res = await login({
        phone: persisitingPhone,
        code: codeRef.current!.value,
      });
      toast.success("ورود موفقیت آمیز بود");
      document.cookie = `sbr_token=${res.refreshTOken}; max-age=31556952000; path=/`;
      dispatch(logIn({ role: res.Role, token: res.token, data: res.findUser }));
      queryClient.invalidateQueries();
      Navigate(from, { replace: true });
    } catch (error) {
      const errors = error as Error | AxiosError;
      console.log(error);
      if (!axios.isAxiosError(errors)) {
        // do whatever you want with native error
      } else {
        if (errors?.response?.status === 401) {
          toast.error("کد وارد شده صحیح نمیباشد");
          return;
        }
      }
      toast.error("خطا در برقراری ارتباط");
    } finally {
      toast.dismiss(loader);
    }
  };

  const handleResetCode = async () => {
    const loader = toast.loading("در حال ارسال اطلاعات");
    try {
      await refreshCode({ phone: persisitingPhone });
      toast.success("کد برای شما مجددا ارسال شد");
      resetCounter();
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    } finally {
      toast.dismiss(loader);
    }
  };
  return (
    <div className="flex flex-col gap-8 p-4 px-8">
      <MainInput
        label="کد دریافت شده وارد کنید"
        id="code"
        intent="login"
        inputSize="base"
        ref={codeRef}
        key={"code"}
      />
      <MainButton
        intent="purple"
        size="login"
        text="ورود"
        onClick={loginHandler}
        disabled={countDown <= 0 ? true : false}
        className="disabled:cursor-not-allowed"
      />
      <div className="flex gap-4 self-center">
        <span className="text-red-500">{usePersianNums(countDown)} ثانیه</span>
        <button
          disabled={countDown > 0 ? true : false}
          onClick={handleResetCode}
          className="border-b border-pink disabled:opacity-50 disabled:cursor-not-allowed"
        >
          درخواست مجدد
        </button>
      </div>
    </div>
  );
};

export default memo(ConfirmCode);
