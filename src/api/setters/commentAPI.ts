import { CardTypes } from "../../Types/cardTypes";
import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

type Data = {
  comment: string;
  id: string;
  parent?: string;
};

const mapper = {
  course: Endpoints.addCommentTocourse,
  book: Endpoints.addCommentToBook,
  article: Endpoints.addCommentToBLog,
};

export const addComment = async (
  type: CardTypes,
  auth: PrivateAuth,
  data: Data
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = mapper[type];
  const response = await privateAxios.post(endpoint, data, {
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

export const setStatus = async (
  auth: PrivateAuth,
  data: {
    id: string;
    status: boolean;
    type: "course" | "book" | "blog";
  }
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.setStatus, data, {
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
