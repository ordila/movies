import FormMovies from "@/components/FormMovies/FormMovies";
import { getMovieByName } from "@/helpers/api";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { IMovies } from "../Home/Home.types";
import { ROUTES } from "@/constants/routes/routes.constants";
import { ErrorElement } from "@/components/Error/Error";
import MoviesList from "@/components/MoviesList/MoviesList";

const { INDEX } = ROUTES;

const Movies = () => {
  const [data, setData] = useState<IMovies[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location = useLocation();

  const handleFormSubmit = (query: string) => {
    setSearchParams(query ? { query } : {});
  };

  useEffect(() => {
    if (!query) return;
    const request = async () => {
      setIsLoading(true);
      try {
        const { results } = await getMovieByName(query || "");

        setData(results);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    request();
  }, [query]);

  if (isLoading) {
    return <div>Is loading...</div>;
  }

  if (error) {
    return <ErrorElement title={error} />;
  }

  return (
    <div>
      <FormMovies handleFormSubmit={handleFormSubmit} />

      <MoviesList data={data || []} />
    </div>
  );
};

export default Movies;
