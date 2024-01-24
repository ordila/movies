import { getMoviesDetail } from "@/helpers/api";
import { useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { ErrorElement } from "../Error/Error";
import { MovieDetails } from "./MoviesDetais.types";
import { ROUTES } from "@/constants/routes/routes.constants";
import { useRequest } from "@/hooks/useRequest";
const { INDEX, CAST, REVIEWS } = ROUTES;

const MoviesDetails = () => {
  const { id } = useParams();

  const location = useLocation();

  const previousLocation = useRef(location.state);

  const {
    data: details,
    isLoading,
    error,
  } = useRequest<MovieDetails, string>(getMoviesDetail, id);

  if (isLoading) {
    return <div>Is loading...</div>;
  }
  if (error) {
    return <ErrorElement title={error} />;
  }
  return (
    <div>
      <Link to={previousLocation.current || `/${INDEX}`}>Back</Link>
      <div>
        <div>
          {details?.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
              alt={details.title}
            />
          )}
        </div>
        <div>
          <h1>{details?.title}</h1>
          <h2>Overview</h2>
          <p>{details?.overview}</p>
          <h2>Genres</h2>
          <ul>
            {details?.genres.map((genres) => {
              return <li key={genres.id}>{genres.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li key={CAST}>
            <Link to={CAST}>Cast</Link>
          </li>
          <li key={REVIEWS}>
            <Link to={REVIEWS}>Review</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
export default MoviesDetails;
