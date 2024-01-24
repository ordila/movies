import { FC } from "react";
import { ROUTES } from "@/constants/routes/routes.constants";
import { Link, useLocation } from "react-router-dom";
import { IMoviesList } from "./MoviesList.types";
const { MOVIES, INDEX } = ROUTES;

const MoviesList: FC<IMoviesList> = ({ data }) => {
  const location = useLocation();
  return (
    <ul>
      {data.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              to={`/${MOVIES}/${String(id)}`}
              state={location || `/${INDEX}`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
