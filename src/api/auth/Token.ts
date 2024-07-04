import { Endpoints } from "../endpoints";
import axios from "../axios";

export const getRefreshToken = async (token: string) => {
  const response = await axios.post(
    Endpoints.refreshToken,
    { refreshtoken: token },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
