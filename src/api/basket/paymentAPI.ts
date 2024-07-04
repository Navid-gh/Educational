import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

type PaymentBasket = {
  item_type: "book";
  id: string;
};

export const payment = async (
  auth: PrivateAuth,
  data: {
    sendPrice?: number;
    provice?: string;
    city?: string;
    address?: string;
    code?: string;
    bascket: PaymentBasket[];
  }
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.payment, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data.gatewayURL;
  } else {
    throw new Error(response.statusText);
  }
};
