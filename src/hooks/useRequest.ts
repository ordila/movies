import { useEffect, useState } from "react";

export const useRequest = <T, P = undefined>(
  fn: (param?: P) => Promise<T>,
  param?: P
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fn(param);

        setData(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fn, param]);

  return { data, setData, isLoading, error };
};
