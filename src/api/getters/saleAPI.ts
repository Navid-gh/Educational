import { Book, Course } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

export type SalesResponse = {
  book: Book[];
  courseIDOInPerson: Course[];
  courseIDOffline: Course[];
  courseIDOnline: Course[];
  factor: string;
  date: number | string;
  amount: number;
  user: {
    address: string;
    city: string;
    first_name: string;
    last_name: string;
    phone: string;
    provice: string;
  };
};

export const getAdminSales = async (
  auth: PrivateAuth
): Promise<SalesResponse[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getSales);
  if (response.status === 200) {
    return response.data.result;
  } else {
    throw new Error(response.statusText);
  }
};
