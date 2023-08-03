import React, { createContext, useContext, useState } from "react";

export const GridContext = createContext(undefined);

export const useGrid = () => {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a GridContextProvider");
  }
  return context;
};

export const GridContextProvider = ({ children }) => {
  const [gridFlow, setGridFlow] = useState(true);
  const values = {
    gridFlow,
    turnOfGrid: () => setGridFlow(false),
    turnOnGrid: () => setGridFlow(true),
  };

  return <GridContext.Provider value={values}>{children}</GridContext.Provider>;
};
