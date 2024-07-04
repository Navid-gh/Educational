import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const addImages = async (
  auth: PrivateAuth,
  images: File[]
): Promise<string[]> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addImages;
  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  const response = await privateAxios.post(endpoint, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response.status === 201) {
    return response.data.urlImage;
  } else {
    throw new Error(response.statusText);
  }
};

export const editImages = async (
  auth: PrivateAuth,
  id: string,
  images: File[]
): Promise<string[]> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editImage(id);
  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  const response = await privateAxios.patch(endpoint, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response.status === 201) {
    return response.data.urlImage;
  } else {
    throw new Error(response.statusText);
  }
};
