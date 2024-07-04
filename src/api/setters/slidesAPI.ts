import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const addSlide = async (auth: PrivateAuth, images: string[]) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addSlide;
  const response = await privateAxios.post(
    endpoint,
    { images },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const removeSlide = async (auth: PrivateAuth, SlideId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.removeSlide(SlideId);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
