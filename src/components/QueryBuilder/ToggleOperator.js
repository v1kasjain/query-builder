import React from "react";

const ToggleOperator = ({ operator, setOperator }) => {
  return (
    <div className="flex text-white mb-6">
      <button
        className="rounded-l px-2 py-2"
        style={{ background: operator === 'AND' ? "#4a47e0" :  "#33363a"}}
        onClick={() => setOperator("AND")}
      >
        AND
      </button>
      <button
        className="rounded-r px-2 py-2"
        style={{ background: operator === 'OR' ? "#4a47e0" :  "#33363a"}}
        onClick={() => setOperator("OR")}
      >
        OR
      </button>
    </div>
  );
};

export default ToggleOperator;
