import { Article, Book, Course } from '../../Types/apiTypes';
import axios from '../axios';
import { Endpoints } from '../endpoints';

export type FilterData = {
  type: 'course' | 'blog' | 'book';
  search?: string | null;
  query?: string | null;
  curseCategory?: string | null;
  categoryBlog?: string | null;
};

const curseCategoryValues = {
  Special: 'getCourseSpecial',
  Fanbayan: 'getCourseFanbayan',
  PersonalDevelopment: 'getCoursePersonalDevelopment',
};
const articleCategoryValues = {
  Educational: 'getEducationalArticles',
  Other: 'getOtherArticles',
};

export const filterProducts = async ({
  type,
  query,
  search,
  curseCategory,
  categoryBlog,
}: FilterData): Promise<Article[] | Book[] | Course[]> => {
  let endpoint;
  if (type === 'blog') {
    endpoint = categoryBlog
      ? Object.keys(articleCategoryValues).includes(categoryBlog)
        ? Endpoints.getArticlesWithCategory(
            articleCategoryValues[
              categoryBlog as keyof typeof articleCategoryValues
            ],
          )
        : 'list'
      : null;
  } else {
    endpoint = curseCategory
      ? Object.keys(curseCategoryValues).includes(curseCategory)
        ? Endpoints.getCoursesWithCategory(
            curseCategoryValues[
              curseCategory as keyof typeof curseCategoryValues
            ],
          )
        : 'list'
      : null;
  }
  endpoint = endpoint ?? Endpoints.filterProducts(type, search, query);
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
