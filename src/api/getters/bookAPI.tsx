import { Book } from "../../Types/apiTypes";

import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get(Endpoints.getProducts);
  if (response.status === 200) {
    return response.data.books;
  } else {
    throw new Error(response.statusText);
  }
};

export const getBook = async (bookID: string): Promise<Book> => {
  const endpoint = Endpoints.getProduct(bookID);
  const response = await axios.get(endpoint);
  if (response.status === 200) {
    return response.data.book;
  } else {
    throw new Error(response.statusText);
  }
};
