import { useAppSelector } from "./useReduxHooks";

const useAuth = () => {
  const user = useAppSelector((state) => state.user);
  return user;
};

export default useAuth;
