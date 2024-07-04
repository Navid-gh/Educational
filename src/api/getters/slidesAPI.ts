import { Slide } from "../../Types/apiTypes";
import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getSlides = async (): Promise<Slide[]> => {
  const response = await axios.get(Endpoints.getAllSlides);
  if (response.status === 200) {
    return response.data.reslut;
  } else {
    throw new Error(response.statusText);
  }
};
