import { useEffect, useState } from "react";
import { getCookie } from "./useCookie";
import { useAppDispatch } from "./useReduxHooks";
import { logIn, logOut } from "../redux/user/userSlice";
import useAuth from "./useAuth";
import { getRefreshToken } from "../api/auth/Token";
import axios, { AxiosError } from "axios";
import useCookie from "./useCookie";

const useInitialAuth = () => {
  const [ready, setReady] = useState(false);
  const dispatch = useAppDispatch();
  const { Auth } = useAuth();
  const { removeCookie } = useCookie("sbr_token");

  useEffect(() => {
    const getAccess = async () => {
      const token = getCookie("sbr_token");
      if (token) {
        if (!Auth) {
          try {
            const res = await getRefreshToken(token);
            dispatch(
              logIn({
                role: res.Role,
                token: res.singToken,
                data: res.findUser,
              })
            );
          } catch (error) {
            const errors = error as Error | AxiosError;
            console.log(error);
            if (!axios.isAxiosError(errors)) {
              // do whatever you want with native error
            } else {
              if (errors?.response?.status === 401) {
                removeCookie("sbr_token");
                dispatch(logOut());
                window.location.replace("/Login");
              }
            }
          } finally {
            setReady(true);
          }
        }
      } else {
        if (Auth) {
          dispatch(logOut());
        }
        setReady(true);
      }
    };

    getAccess();
  }, []); // Empty dependency array to ensure the effect runs only once

  return ready;
};

export default useInitialAuth;
