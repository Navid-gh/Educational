import { Article } from '../../Types/apiTypes';
import { PrivateAuth } from '../../Types/reqAuth';

import axios from '../axios';
import { Endpoints } from '../endpoints';
import { getRedirects } from './redirectAPI';

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get(Endpoints.getArticles);
  if (response.status === 200) {
    return response.data.blogs;
  } else {
    throw new Error(response.statusText);
  }
};

export const getEducationalArticles = async (): Promise<Article[]> => {
  const response = await axios.get(Endpoints.getEducationalArticles);
  if (response.status === 200) {
    return response.data.result;
  } else {
    throw new Error(response.statusText);
  }
};

export const getArticle = async (
  bookID: string,
  auth: PrivateAuth,
): Promise<Article> => {
  const redirects = await getRedirects(auth);
  const endpoint = Endpoints.getArticle(bookID);
  const currentUrl = `/Article/${bookID}`;
  const redirect = redirects.find(
    (item) =>
      item.oldUrl === currentUrl && item.statusCode === 301 && item.active,
  );
  console.log('currentUrl:', currentUrl);
  console.log('redirect:', redirect);
  if (redirect) {
    window.location.href = redirect.newUrl;
    console.log('Redirecting...');
    return new Promise(() => {});
  }

  console.log('Calling getArticle API...');
  const response = await axios.get(endpoint);
  if (response.status === 200) {
    return response.data.blog;
  } else {
    throw new Error(response.statusText);
  }
};
