import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const WrapperHeader = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
