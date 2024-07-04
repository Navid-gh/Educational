import { v4 as uuidv4 } from "uuid";

type Tab = {
  name: string;
  id: ReturnType<typeof uuidv4>;
  url: string;
};

export type UrlTabs = Tab[];
