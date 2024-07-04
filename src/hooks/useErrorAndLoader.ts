type Props<T> = {
  isError: boolean;
  isLoading: boolean;
  data: T;
  error: Error | null;
};

const useErrorAndLoader = <T>({
  isError,
  isLoading,
  data,
  error,
}: Props<T>) => {
  if (isError) {
    console.log(error);
    return "error";
  }

  if (isLoading) return "..loading";

  console.log(data);
};

export default useErrorAndLoader;
