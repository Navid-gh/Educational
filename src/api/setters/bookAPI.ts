import { Book } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";

import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export const editBook = async (
  auth: PrivateAuth,
  bookID: string,
  data: Pick<
    Book,
    | "short_text"
    | "text"
    | "title"
    | "category"
    | "images"
    | "discount"
    | "pricePhysical"
    | "priceVirtual"
    | "numberOfPages"
    | "yearOfPublication"
    | "link"
    | "urlTitle"
    | "urlGoogle"
  >
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editProduct(bookID);
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

export const addBook = async (
  auth: PrivateAuth,
  data: Pick<
    Book,
    | "short_text"
    | "text"
    | "title"
    | "category"
    | "images"
    | "discount"
    | "pricePhysical"
    | "priceVirtual"
    | "numberOfPages"
    | "yearOfPublication"
    | "link"
    | "urlTitle"
    | "urlGoogle"
  >
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addProduct, data, {
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

export const removeBook = async (auth: PrivateAuth, bookID: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.deleteProduct(bookID);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
