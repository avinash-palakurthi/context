import Parent from "./Parent";
import React from "react";

export const Context = React.createContext("");
const GrandParent = () => {
  let greetings = "greetings from your grandParents";
  return (
    <Context.Provider value={greetings}>
      <div className="grand">
        <h2>Iam GrandParent</h2>
        <Parent />
      </div>
    </Context.Provider>
  );
};

export default GrandParent;
