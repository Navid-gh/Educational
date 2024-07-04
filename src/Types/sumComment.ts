import { v4 as uuidv4 } from "uuid";

export type sumCommentType = {
  name: string;
  date: string;
  course: string;
  text: string;
  id: ReturnType<typeof uuidv4>;
};
