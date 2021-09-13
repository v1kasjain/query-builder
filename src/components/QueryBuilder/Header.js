import React, { useEffect, useState } from "react";
import { OPERATOR, QUERY_OPERATOR } from "../../constants";
const Header = ({ groupQuery }) => {
  const [readableString, setReadableString] = useState("");
  useEffect(() => {
    const str = () => {
      let s = "";
      for (const querySet of groupQuery) {
        const { query, operator } = querySet;
        const queryLength = query.length;
        if (queryLength > 0) {
          for (const [index, obj] of Object.entries(query)) {
            // Sorting keys for a proper querys
            const sortedObj = {};
            if (obj.Field) sortedObj.Field = obj.Field;
            if (obj.Condition) sortedObj.Condition = obj.Condition;
            if (obj.Criteria) sortedObj.Criteria = obj.Criteria;

            // Prepare readable string
            for (const [key, value] of Object.entries(sortedObj)) {
              if (key === "Field") {
                s += `"(${key}.${value})" `;
              } else if (key === "Condition") {
                s += OPERATOR[value];
              } else if (key === "Criteria") {
                s += ` \\"${value}"\\"`;
              }
            }

            // Verify and show operator only in middle of query's
            if (
              queryLength > 1 &&
              queryLength - (parseInt(index, 2) + 1) > 0 && 
              operator
            ) {
              s += ` ${QUERY_OPERATOR[operator]} `;
            }
          }
        }
      }
      return s;
    };
    setReadableString(str(groupQuery));
  }, [groupQuery]);

  return (
    <div className="text-white p-10" style={{ background: "#5662eb" }}>
      {readableString ? (
        <div>
          <h1 className="flex text-xl">Create tag and query</h1>
          <div
            className="container mx-auto text-left p-2 whitespace-normal"
            style={{ background: "#3f39c6" }}
          >
            Query: {readableString}
          </div>
        </div>
      ) : (
        <div className="container mx-auto text-left p-2 whitespace-normal">
          <h1 className="text-xl">Create tag and query</h1>
          <p className="text-xs text-gray-300">
            The query you build will be saved in your active view
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
