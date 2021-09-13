import { useMemo } from "react";
import { FIELDS, CONDITION, CRITERIA } from "../constants";

const useFilterData = () => {
  const filters = useMemo(() => {
    return [
      {
        label: "Field",
        options: FIELDS,
      },
      {
        label: "Condition",
        options: CONDITION,
      },
      {
        label: "Criteria",
        options: CRITERIA,
      },
    ];
  }, []);

  return { filters };
};

export default useFilterData;
