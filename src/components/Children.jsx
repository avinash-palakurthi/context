import React from "react";
import { Context } from "./GrandParent";
const Children = () => {
  const message = React.useContext(Context);
  return (
    <div className="children">
      <h1>Iam Children</h1>
      <h2>message : {message}</h2>
    </div>
  );
};

export default Children;
