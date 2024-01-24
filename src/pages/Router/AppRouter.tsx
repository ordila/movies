import { Route, Routes } from "react-router-dom";

import { WrapperHeader } from "@/components/WrapperHeader/WrapperHeader";

import { FC, lazy } from "react";

import Home from "../Home/Home";

import { ROUTES } from "@/constants/routes/routes.constants";

const Cast = lazy(() => import("@/components/Cast/Cast"));
const Review = lazy(() => import("@/components/Review/Review"));
const Movies = lazy(() => import("../Movies/Movies"));
const MoviesDetails = lazy(
  () => import("@/components/MoviesDetails/MoviesDetails")
);

const { INDEX, MOVIES, MOVIES_DETAILS, CAST, REVIEWS } = ROUTES;
export const AppRouter: FC = () => {
  return (
    <div>
      <Routes>
        <Route path={INDEX} element={<WrapperHeader />}>
          <Route index element={<Home />} />
          <Route path={MOVIES} element={<Movies />} />
          <Route path={MOVIES_DETAILS} element={<MoviesDetails />}>
            <Route path={CAST} element={<Cast />} />
            <Route path={REVIEWS} element={<Review />} />
            <Route />
          </Route>
        </Route>
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </div>
  );
};
