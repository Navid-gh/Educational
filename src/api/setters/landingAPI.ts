import { LandingType } from '../../Types/apiTypes';
import { PrivateAuth } from '../../Types/reqAuth';

import { createPrivateAxios } from '../axios';
import { Endpoints } from '../endpoints';

export const editLanding = async (
  auth: PrivateAuth,
  landingID: string,
  data: LandingType,
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editLanding(landingID);
  const response = await privateAxios.patch(endpoint, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addLanding = async (auth: PrivateAuth, data: LandingType) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addLanding, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const removeLanding = async (auth: PrivateAuth, landingID: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.removeLanding(landingID);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
