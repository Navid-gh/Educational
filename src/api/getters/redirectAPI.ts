import { RedirectItem } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const getRedirects = async (
  auth: PrivateAuth,
): Promise<RedirectItem[]> => {

  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.get(
    Endpoints.getRedirects,
  );

  if (response.status === 200) {
    return response.data.redirects;
  } else {
    throw new Error(response.statusText);
  }

};