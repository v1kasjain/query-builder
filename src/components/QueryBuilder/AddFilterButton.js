import React from "react";

export const AddFilterButton = ({ addFilter }) => {
  return (
    <div className="flex">
      {" "}
      <button
        onClick={addFilter}
        className="py-2 px-4 rounded-md mt-4 text-white"
        style={{ background: "#4a47e0" }}
      >
        Add Filter
      </button>
    </div>
  );
};
