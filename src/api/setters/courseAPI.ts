import { Course } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const editCourse = async (
  auth: PrivateAuth,
  courseID: string,
  data: Pick<
    Course,
    | "short_text"
    | "text"
    | "title"
    | "category"
    | "images"
    | "price"
    | "discount"
    | "level"
    | "type"
    | "spotPlayerID"
    | "urlTitle"
    | "urlGoogle"
  >
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editCourse(courseID);
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

export const addCourse = async (
  auth: PrivateAuth,
  data: Pick<
    Course,
    | "short_text"
    | "text"
    | "title"
    | "category"
    | "images"
    | "discount"
    | "price"
    | "level"
    | "type"
    | "spotPlayerID"
    | "urlTitle"
    | "urlGoogle"
  >
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addCourse, data, {
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

export const removeCourse = async (auth: PrivateAuth, courseID: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteCourse(courseID);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
