import { LandingType } from "../../Types/apiTypes";
import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getLanding = async (): Promise<LandingType[]> => {
  const response = await axios.get(Endpoints.getLanding);
  if (response.status === 200) {
    return response.data.data;
  } else {
    throw new Error(response.statusText);
  }
};
