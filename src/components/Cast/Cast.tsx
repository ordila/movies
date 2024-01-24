import { getCast } from "@/helpers/api";
import { useRequest } from "@/hooks/useRequest";
import { useParams } from "react-router-dom";
import { Movie } from "./Cast.types";
import { ErrorElement } from "../Error/Error";
import { DEFAULT_PHOTO } from "@/constants/photo/defaultPhoto";

const Cast = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useRequest<Movie, string>(getCast, id);
  if (isLoading) {
    return <div>Is loading...</div>;
  }
  if (error) {
    return <ErrorElement title={error} />;
  }
  return (
    <div>
      {data?.cast.map((el) => (
        <div key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w300/${el.profile_path}`
                : DEFAULT_PHOTO
            }
            width={300}
            alt={el.name}
          />
          <h2>{el.name}</h2>
        </div>
      ))}
      );
    </div>
  );
};
export default Cast;
