import { Episode } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const addEpisode = async (
  auth: PrivateAuth,
  data: Pick<Episode, "text" | "title"> & {
    courseID: string;
    chapterID: string;
  }
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addEpisode, data, {
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
export const removeEpisode = async (auth: PrivateAuth, episodeId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteEpisode(episodeId);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
