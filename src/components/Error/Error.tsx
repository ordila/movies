import React, { FC } from "react";

export const ErrorElement: FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      Ooopss... <br />
      Error : {title}
    </div>
  );
};
