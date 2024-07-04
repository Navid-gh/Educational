import { ReactNode } from "react";
import Loader from "./UI/Loader";
import ErrorComp from "./UI/ErrorComp";

type Props<T> = {
  isError: boolean;
  isLoading: boolean;
  data: T;
  error: Error | null;
  children: ReactNode;
};

const WithLoaderAndError = <T,>({
  isError,
  isLoading,
  data,
  error,
  children,
}: Props<T>) => {
  if (isError) {
    console.log(error);
    return <ErrorComp />;
  }

  if (isLoading) return <Loader />;

  if (!data) {
    return <div>No data available.</div>;
  }
  return <>{children}</>;
};

export default WithLoaderAndError;
