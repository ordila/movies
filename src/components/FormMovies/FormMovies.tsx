import React, { FC, useState } from "react";
import { IProps } from "./FormMovies.types";

const FormMovies: FC<IProps> = ({ handleFormSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FormMovies;
