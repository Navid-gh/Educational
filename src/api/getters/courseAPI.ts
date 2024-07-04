// getters/userAPI.ts

import { Course } from "../../Types/apiTypes";
import axios from "../axios";
import { Endpoints } from "../endpoints";

export const getCourses = async (): Promise<Course[]> => {
  const response = await axios.get(Endpoints.getCourses);
  if (response.status === 200) {
    return response.data.courses;
  } else {
    throw new Error(response.statusText);
  }
};

export const getCourse = async (courseID: string): Promise<Course> => {
  const endpoint = Endpoints.getCourse(courseID);
  const response = await axios.get(endpoint);
  if (response.status === 200) {
    return response.data.course;
  } else {
    throw new Error(response.statusText);
  }
};
