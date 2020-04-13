import React from "react";

export const Player = ({ value }) => (
  <>
    {/* Fragments = container to return some stuff */}
    {value === "x" && (
      <span role="img" aria-label="x">
        🤩
      </span>
    )}
    {value === "o" && (
      <span role="img" aria-label="o">
        🥳
      </span>
    )}
  </>
);
