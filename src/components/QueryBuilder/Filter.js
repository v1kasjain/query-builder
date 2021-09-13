import React from "react";

const Filter = ({ setQuery, filters, index }) => {
  const buildQuery = (e, label) => {
    setQuery((prev) => {
      const newQuery = [...prev];
      if (newQuery[index]) {
        newQuery[index][label] = e?.target?.value;
      } else {
        newQuery[index] = {};
        newQuery[index][label] = e?.target?.value;
      }

      return newQuery;
    });
  };

  return (
    <div className="flex">
      {filters.map(({ label, options }) => {
        return (
          <label key={label} className="flex-auto mr-1 text-left text-white">
            {label}
            <select
              onChange={(e) => buildQuery(e, label, index)}
              className="rounded w-full p-2 m-1"
              style={{ background: "#33363a" }}
            >
              <option value="">Select {label}</option>
              {options.map(({ label, value }) => {
                return (
                  <option key={label} value={value}>
                    {label}
                  </option>
                );
              })}
            </select>
          </label>
        );
      })}
    </div>
  );
};

export default Filter;
