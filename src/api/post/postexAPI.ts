import { postAxios } from "../axios";
import { Endpoints } from "../endpoints";

export type State = {
  stateId: number;
  stateName: string;
};

export type City = {
  stateId: number;
  townId: number;
  townName: string;
};

export type PriceData = {
  serviceId: number | null;
  weight: number;
  insuranceName: string;
  packingDimension: {
    length: number;
    width: number;
    height: number;
  };
  senderCityId: number;
  receiverCityId: number;
  goodsValue: number;
  printBill: boolean;
  printLogo: boolean;
  needCartoon: boolean;
  isCod: boolean;
  sendSms: boolean;
};

export const getStates = async (): Promise<State[]> => {
  const response = await postAxios.get(Endpoints.getStates);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getCities = async (stateId: number): Promise<City[]> => {
  const endpoint = Endpoints.getCities(stateId);
  const response = await postAxios.get(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getPostPrice = async (data: PriceData) => {
  const response = await postAxios.post(
    Endpoints.getPrice,
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
