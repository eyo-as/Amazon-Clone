import React, { createContext, useReducer } from "react";

let DataContext = createContext();

let DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
