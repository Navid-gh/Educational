import { getRefreshToken } from "../api/auth/Token";
import { getCookie } from "./useCookie";

const useRefreshToken = () => {
  const refresh = async () => {
    const Token = getCookie("sbr_token");
    if (Token) {
      const response = await getRefreshToken(Token);
      return response.singToken;
    }
  };
  return refresh;
};

export default useRefreshToken;
