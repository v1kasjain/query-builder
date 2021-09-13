import React, { useEffect, useState } from "react";
import { AddFilterButton } from "./AddFilterButton";
import Filter from "./Filter";
import ToggleOperator from "./ToggleOperator";

const GroupFilter = ({ filters, setGroupQuery, groupIndex }) => {
  const [query, setQuery] = useState([]);
  const [fields, setFields] = useState([filters]);
  const [operator, setOperator] = useState("AND");
  const addFilter = () => {
    setFields((prev) => {
      return [...prev, filters];
    });
  };

  useEffect(() => {
    setGroupQuery((prev) => {
      const newGroupQuery = [...prev];
      newGroupQuery[groupIndex] = { operator, query };
      return newGroupQuery;
    });
  }, [query, operator, groupIndex, setGroupQuery]);

  return (
    <div className="block p-4 rounded mb-4" style={{ background: "#282b30" }}>
      <ToggleOperator operator={operator} setOperator={setOperator} />
      {fields.map((field, index) => {
        return (
          <Filter
            key={index}
            index={index}
            setQuery={setQuery}
            filters={field}
            groupIndex={groupIndex}
          />
        );
      })}
      <AddFilterButton addFilter={addFilter} />
    </div>
  );
};

export default GroupFilter;
