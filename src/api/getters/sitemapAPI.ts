import { SitemapItemType } from '../../Types/apiTypes';
import { PrivateAuth } from '../../Types/reqAuth';
import { createPrivateAxios } from '../axios';
import { Endpoints } from '../endpoints';

export const getSitemapUrls = async (
  auth: PrivateAuth,
): Promise<SitemapItemType[]> => {
  const privateAxios = createPrivateAxios(auth);

  const response = await privateAxios.get<{ urls: SitemapItemType[] }>(
    Endpoints.getSitemap,
  );

  if (response.status === 200) {
    return response.data.urls;
  }

  throw new Error(response.statusText);
};
