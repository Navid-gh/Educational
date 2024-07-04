import { View } from "../../Types/apiTypes";

import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getViews = async (): Promise<View[]> => {
  const response = await axios.get(Endpoints.getViews);
  if (response.status === 200) {
    return response.data.allView;
  } else {
    throw new Error(response.statusText);
  }
};
