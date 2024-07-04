import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export type Data = {
  phone?: string;
  email?: string;
  address?: string;
  first_name?: string;
  last_name?: string;
  codePostal?: string;
};

export const editUser = async (auth: PrivateAuth, data: Data) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.patch(Endpoints.editUser, data, {
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
