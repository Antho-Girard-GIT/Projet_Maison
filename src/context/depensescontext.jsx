import { createContext, useContext, useState } from "react";

const DepensesContext = createContext();

export function DepensesProvider({ children }) {
  const [depenses, setDepenses] = useState([]);
  return (
    <DepensesContext.Provider value={{ depenses, setDepenses }}>
      {children}
    </DepensesContext.Provider>
  );
}

export function useDepenses() {
  return useContext(DepensesContext);
}