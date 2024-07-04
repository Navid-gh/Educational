// import { useEffect } from "react";
// import { createPrivateAxios } from "../api/axios";
// import useRefreshToken from "./useRefreshToken";
// import useAuth from "./useAuth";
// import { InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
// import { useAppDispatch } from "./useReduxHooks";
// import { logOut } from "../redux/user/userSlice";
// import { useNavigate } from "react-router-dom";

// const useAxiosPrivate = () => {
//   const refresh = useRefreshToken();
//   const { Auth, token } = useAuth();
//   const axiosPrivate = createPrivateAxios(token);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isMounted = true;

//     const requestInterceptor = axiosPrivate.interceptors.request.use(
//       (config: InternalAxiosRequestConfig) => {
//         if (!config!.headers!["Authorization"]) {
//           config!.headers!["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error: AxiosError) => Promise.reject(error)
//     );

//     const responseInterceptor = axiosPrivate.interceptors.response.use(
//       (response: AxiosResponse) => response,
//       async (error: AxiosError) => {
//         if (error?.response?.status === 401 && isMounted) {
//           try {
//             const newAccessToken = await refresh();
//             error!.config!.headers[
//               "Authorization"
//             ] = `Bearer ${newAccessToken}`;
//             return axiosPrivate.request(error.config!);
//           } catch (refreshError) {
//             // Handle token refresh error (e.g., logout the user)
//             console.log(refreshError);
//             dispatch(logOut());
//             navigate("/Login");
//           }
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       isMounted = false;
//       axiosPrivate.interceptors.request.eject(requestInterceptor);
//       axiosPrivate.interceptors.response.eject(responseInterceptor);
//     };
//   }, [Auth, refresh]);

//   return axiosPrivate;
// };

// export default useAxiosPrivate;
