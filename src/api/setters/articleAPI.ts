import { Article } from "../../Types/apiTypes";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";
import type { PrivateAuth } from "../../Types/reqAuth";

export const editArticle = async (
  auth: PrivateAuth,
  articleID: string,
  data: Pick<
    Article,
    | "short_text"
    | "text"
    | "title"
    | "category"
    | "images"
    | "status"
    | "urlTitle"
    | "urlGoogle"
  >
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editArticle(articleID);
  const response = await privateAxios.put(endpoint, data, {
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

export const addArticle = async (
  auth: PrivateAuth,
  data: Pick<
    Article,
    | "short_text"
    | "text"
    | "title"
    | "category"
    | "images"
    | "status"
    | "urlTitle"
    | "urlGoogle"
  >
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addArticle, data, {
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

export const removeArticle = async (auth: PrivateAuth, articleID: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteArticle(articleID);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
