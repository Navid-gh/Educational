import { Chapter } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const addChapter = async (
  auth: PrivateAuth,
  data: Pick<Chapter, "numberOfSessions" | "text" | "title"> & {
    id: string;
    time: string;
  }
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addChapter, data, {
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

export const editChapter = async (
  auth: PrivateAuth,
  ChapterId: string,
  data: Pick<Chapter, "numberOfSessions" | "text" | "title"> & {
    time: string;
  }
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editChapter(ChapterId);
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

export const removeChapter = async (auth: PrivateAuth, ChapterId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteChapter(ChapterId);
  const response = await privateAxios.patch(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
