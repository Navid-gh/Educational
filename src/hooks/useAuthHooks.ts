import { useAppDispatch } from "./useReduxHooks";
import useRefreshToken from "./useRefreshToken";
import { updateAccessToken } from "../redux/user/userSlice";

export const useAuthHooks = () => {
  const dispatch = useAppDispatch();
  const refresh = useRefreshToken();
  return { updateAccessToken, dispatch, refresh };
};
