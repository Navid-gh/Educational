import { View } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const editView = async (
  id: string,
  data: Pick<View, "description" | "nameCourse" | "nameUser">,
  auth: PrivateAuth
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editView(id);
  const response = await privateAxios.patch(endpoint, data, {
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

export const removeView = async (id: string, auth: PrivateAuth) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteView(id);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addView = async (
  data: Pick<View, "description" | "nameCourse" | "nameUser">,
  auth: PrivateAuth
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addView, data, {
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
