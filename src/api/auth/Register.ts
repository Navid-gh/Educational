import axios from "../axios";
import { Endpoints } from "../endpoints";

export const register = async (data: {
  first_name: string;
  last_name: string;
  phone: string;
}) => {
  const response = await axios.post(Endpoints.register, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const checkUser = async (data: { phone: string }) => {
  const response = await axios.post(Endpoints.checkUser, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const login = async (data: { code: string; phone: string }) => {
  const response = await axios.post(Endpoints.logIn, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const refreshCode = async (data: { phone: string }) => {
  const response = await axios.post(Endpoints.refreshCode, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
