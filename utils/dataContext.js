// DataContext.js
import React, { createContext, useState } from "react";

const DataContext = createContext({
  headerData: "Deepesh Jain",
  setHeaderData: () => {},
});

export const DataProvider = ({ children }) => {
  const [headerData, setHeaderData] = useState("Deepesh Jain");

  return (
    <DataContext.Provider value={{ headerData, setHeaderData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
