import { v4 as uuidv4 } from "uuid";

export type Detail = {
  key: string;
  value: string | number;
  id: ReturnType<typeof uuidv4>;
};
