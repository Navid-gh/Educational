import { Book, Course } from "../Types/apiTypes";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

type OutPut<T> = [(Book | Course)[] | T, <T>(value: T) => void, () => void];

function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage
): OutPut<T> {
  let value;
  const jsonValue = storageObject.getItem(key);
  if (jsonValue != null) {
    value = JSON.parse(jsonValue);
  } else {
    if (typeof defaultValue === "function") {
      value = defaultValue();
    } else {
      value = defaultValue;
    }
  }

  const setValue = <T>(value: T) => {
    storageObject.setItem(key, JSON.stringify(value));
  };

  const remove = () => {
    storageObject.removeItem(key);
  };

  return [value, setValue, remove];
}
