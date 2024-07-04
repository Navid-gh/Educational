import { DiscountEvent } from "../../Types/apiTypes";
import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getEvents = async (): Promise<DiscountEvent[]> => {
  const response = await axios.get(Endpoints.getAllEvents);
  if (response.status === 200) {
    return response.data.reslut;
  } else {
    throw new Error(response.statusText);
  }
};
