import { getReviews } from "@/helpers/api";
import React from "react";
import { useParams } from "react-router-dom";
import { Reviews } from "./Review.types";
import { useRequest } from "@/hooks/useRequest";
import { ErrorElement } from "../Error/Error";

const Review = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useRequest<Reviews, string>(
    getReviews,
    id
  );
  if (isLoading) {
    return <div>Is loading...</div>;
  }
  if (error) {
    return <ErrorElement title={error} />;
  }

  return (
    <div>
      {data?.results && data.results.length > 0 ? (
        data?.results.map((el) => (
          <div key={el.id}>
            <h2>{el.author}</h2>

            <p>{el.content}</p>
          </div>
        ))
      ) : (
        <h2>Sorry, there are no reviews</h2>
      )}
    </div>
  );
};
export default Review;
