import { Article } from "../../Types/apiTypes";

import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get(Endpoints.getArticles);
  if (response.status === 200) {
    return response.data.blogs;
  } else {
    throw new Error(response.statusText);
  }
};

export const getArticle = async (bookID: string): Promise<Article> => {
  const endpoint = Endpoints.getArticle(bookID);
  const response = await axios.get(endpoint);
  if (response.status === 200) {
    return response.data.blog;
  } else {
    throw new Error(response.statusText);
  }
};
