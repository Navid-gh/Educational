import { DiscountCode } from "../../Types/apiTypes";
import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getCodes = async (): Promise<DiscountCode[]> => {
  const response = await axios.get(Endpoints.getCodes);
  if (response.status === 200) {
    return response.data.discountCode;
  } else {
    throw new Error(response.statusText);
  }
};

export const checkCode = async (code: string): Promise<null | DiscountCode> => {
  const response = await axios.post(
    Endpoints.checkDiscountCode,
    { code },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  if (response.status === 200) {
    return response.data.result;
  } else {
    throw new Error(response.statusText);
  }
};

export const addCode = async (percent: string) => {
  const response = await axios.post(
    Endpoints.addDiscountCode,
    { percent },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const removeCode = async (codeId: string) => {
  const endpoint = Endpoints.removeDiscountCode(codeId);
  const response = await axios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
