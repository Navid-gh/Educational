import { Article, Book, Course } from "../../Types/apiTypes";
import axios from "../axios";
import { Endpoints } from "../endpoints";

export type FilterData = {
  type: "course" | "blog" | "book";
  search?: string | null;
  query?: string | null;
  curseCategory: string | null;
};

const curseCategoryValues = {
  Fanbayan: "getCourseFanbayan",
  PersonalDevelopment: "getCoursePersonalDevelopment",
};

export const filterProducts = async ({
  type,
  query,
  search,
  curseCategory,
}: FilterData): Promise<Article[] | Book[] | Course[]> => {
  const endpoint = curseCategory
    ? Object.keys(curseCategoryValues).includes(curseCategory)
      ? Endpoints.getCoursesWithCategory(
          curseCategoryValues[curseCategory as keyof typeof curseCategoryValues]
        )
      : "list"
    : Endpoints.filterProducts(type, search, query);
  const response = await axios.get(endpoint);
  if (response.status === 200) {
    return response.data.result;
  } else {
    throw new Error(response.statusText);
  }
};

export const searchProducts = async (search: string) => {
  const endpoint = Endpoints.searchAllProducts(search);
  const response = await axios.get(endpoint);
  if (response.status === 200) {
    return response.data.lists;
  } else {
    throw new Error(response.statusText);
  }
};
