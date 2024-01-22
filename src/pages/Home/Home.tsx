import { getTrendingMovies } from "@/helpers/api";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "@/constants/routes/routes.constants";
import { ErrorElement } from "@/components/Error/Error";
import { useRequest } from "@/hooks/useRequest";
import { Response } from "./Home.types";

const { MOVIES, HOME } = ROUTES;

const Home: FC = () => {
  const location = useLocation();

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
      <ul>
        {trendingMovies?.results.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`${MOVIES}/${String(id)}`}
                state={location || `/${HOME}`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
