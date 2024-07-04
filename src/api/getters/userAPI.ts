import { Book, Course, User } from "../../Types/apiTypes";
import { PrivateAuth } from "../../Types/reqAuth";
import { createPrivateAxios } from "../axios";
import { Endpoints } from "../endpoints";

type PurchasedItem = {
  date: string;
  authority: string;
};

type OfflinePurchased = {
  tokenSP: string;
  spotPlayerID: string;
};

export type AllUsersUserType = {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  phone: string;
  _id: string;
};

export const getUsers = async (
  auth: PrivateAuth
): Promise<AllUsersUserType[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getUsers);
  if (response.status === 200) {
    return response.data.result;
  } else {
    throw new Error(response.statusText);
  }
};

export const getUser = async (auth: PrivateAuth): Promise<User> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getUser);
  if (response.status === 200) {
    return response.data.user;
  } else {
    throw new Error(response.statusText);
  }
};

export const getPurchasedBook = async (
  auth: PrivateAuth,
  limit: number = 0
): Promise<(Book & PurchasedItem)[]> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.getPurchasedBook(limit);
  const response = await privateAxios.get(endpoint);
  if (response.status === 200) {
    return response.data.educationalBook;
  } else {
    throw new Error(response.statusText);
  }
};

export const getPurchasedOnline = async (
  auth: PrivateAuth,
  limit: number = 0
): Promise<(Course & PurchasedItem)[]> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.getPurchasedOnlineCourses(limit);
  const response = await privateAxios.get(endpoint);
  if (response.status === 200) {
    return response.data.educationalVideoOnline;
  } else {
    throw new Error(response.statusText);
  }
};

export const getPurchasedOffline = async (
  auth: PrivateAuth,
  limit: number = 0
): Promise<(Course & OfflinePurchased & PurchasedItem)[]> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.getPurchasedOfflineCourses(limit);
  const response = await privateAxios.get(endpoint);
  if (response.status === 200) {
    return response.data.educationalVideoOffline;
  } else {
    throw new Error(response.statusText);
  }
};

export const getPurchasedInPerson = async (
  auth: PrivateAuth,
  limit: number = 0
): Promise<(Course & PurchasedItem)[]> => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.getPurchasedInPersonCourses(limit);
  const response = await privateAxios.get(endpoint);
  if (response.status === 200) {
    return response.data.educationalVideoInPerson;
  } else {
    throw new Error(response.statusText);
  }
};
