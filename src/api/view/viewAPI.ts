import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getIp = async () => {
  const response = await axios.get(Endpoints.getUserIp);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const submitView = async (data: {
  type: string;
  id: string;
  ip: string;
}) => {
  const response = await axios.post(Endpoints.submitView, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    // throw new Error(response.statusText);
  }
};
