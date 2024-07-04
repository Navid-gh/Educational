import { FAQ } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const editFaq = async (
  auth: PrivateAuth,
  courseID: string,
  data: Pick<FAQ, "answer" | "question">
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editFAQ(courseID);
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

export const addFaq = async (
  auth: PrivateAuth,
  courseID: string,
  data: Pick<FAQ, "answer" | "question">
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addFAQ(courseID);
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

export const removeFaq = async (auth: PrivateAuth, courseID: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteFAQ(courseID);
  const response = await privateAxios.patch(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
