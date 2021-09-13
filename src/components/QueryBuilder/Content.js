import React, { useState } from "react";
import useFilterData from "../../hooks/useFilters";
import GroupFilter from "./GroupFilter";

const Content = ({ setGroupQuery }) => {
  const { filters } = useFilterData();
  const [filterGroup, setFilterGroup] = useState([
    {
      fields: filters,
    },
  ]);

  const addGroupFilter = () => {
    setFilterGroup((prev) => {
      return [
        ...prev,
        {
          fields: filters,
        },
      ];
    });
  };

  return (
    <div className="container mx-auto text-black mt-8">
      {filterGroup.map(({ operator, fields }, index) => {
        return (
          <GroupFilter
            key={index}
            filters={fields}
            setGroupQuery={setGroupQuery}
            groupIndex={index}
          />
        );
      })}

      <div className="flex">
        <button
          className="py-2 px-4 rounded-md mt-4 text-white"
          style={{ background: "#4a47e0" }}
          onClick={() => addGroupFilter()}
        >
          + Add new group filter
        </button>
      </div>
    </div>
  );
};

export default Content;
