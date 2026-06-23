import { SitemapChangeFreq } from '../../Types/apiTypes';
import { PrivateAuth } from '../../Types/reqAuth';
import { createPrivateAxios } from '../axios';
import { Endpoints } from '../endpoints';

export const addSitemapUrl = async (
  auth: PrivateAuth,
  data: {
    url: string;
    priority: number;
    changefreq: SitemapChangeFreq;
  },
) => {
  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.post(Endpoints.addSitemap, data);

  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const removeSitemapUrl = async (auth: PrivateAuth, id: string) => {
  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.delete(Endpoints.removeSitemap(id));

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
