import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

//Header
//Content
//Footer

const QueryBuilder = () => {
  const [groupQuery, setGroupQuery] = useState([]);
  return (
    <div style={{ background: "#14161a", height: '100%', width: '100%', position:'absolute' }}>
      <Header groupQuery={groupQuery} />
      <Content setGroupQuery={setGroupQuery} />
    </div>
  );
};

export default QueryBuilder;
