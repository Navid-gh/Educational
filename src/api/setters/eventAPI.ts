import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

type AddEventData = {
  text: string;
  title: string;
  images: string[];
  courses: string[];
  books: string[];
};

export const addEvent = async (auth: PrivateAuth, data: AddEventData) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addEvent, data, {
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

export const removeEvent = async (auth: PrivateAuth, EventID: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.removeEvent(EventID);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
