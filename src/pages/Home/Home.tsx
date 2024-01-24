import { getTrendingMovies } from "@/helpers/api";
import { FC } from "react";

import { ErrorElement } from "@/components/Error/Error";
import { useRequest } from "@/hooks/useRequest";
import { Response } from "./Home.types";
import MoviesList from "@/components/MoviesList/MoviesList";

const Home: FC = () => {
  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useRequest<Response>(getTrendingMovies);

  if (isLoading) {
    return <div>Is loading...</div>;
  }
  if (error) {
    return <ErrorElement title={error} />;
  }

  return (
    <div>
      <MoviesList data={trendingMovies?.results ?? []} />
    </div>
  );
};

export default Home;
