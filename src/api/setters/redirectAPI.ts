import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const addRedirect = async (
  auth: PrivateAuth,
  data: {
    oldUrl: string;
    newUrl: string;
    statusCode: 301;
  },
) => {
  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.post(
    Endpoints.addRedirect,
    data,
  );

  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const editRedirect = async (
  auth: PrivateAuth,
  id: string,
  data: {
    oldUrl: string;
    newUrl: string;
    statusCode: 301;
    active: boolean;
  },
) => {

  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.patch(
    Endpoints.editRedirect(id),
    data,
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }

};

export const removeRedirect = async (
  auth: PrivateAuth,
  id: string,
) => {

  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.delete(
    Endpoints.deleteRedirect(id),
  );

  if (response.status === 200) {

    return response.data;
  } else {
    throw new Error(response.statusText);
  }

};