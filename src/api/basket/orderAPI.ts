import { Book, Course } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

type OrderDetail = {
  factor: string;
  date: string;
  book: Book[];
  courseIDOInPerson: Course[];
  courseIDOffline: (Course & { tokenSP: string; spotPlayerID: string })[];
  courseIDOnline: Course[];
};

export const getOrderDetail = async (
  auth: PrivateAuth,
  id: string
): Promise<OrderDetail> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.orderDetail(id);
  const response = await privateAxios.get(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
