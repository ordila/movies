import React, { FC, useState } from "react";

interface Props {
  handleFormSubmit: (query: string) => void;
}

const FormMovies: FC<Props> = ({ handleFormSubmit }) => {
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
