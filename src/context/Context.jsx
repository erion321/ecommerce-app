import { createContext, useContext, useState } from "react";
import { items } from "../data/data";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState(items);

  const filterData = (category) => {
    if (category == "all") {
      return setData(items);
    }
    return setData(items.filter((item) => item.category == category));
  };
  return (
    <AppContext.Provider value={{ sidebar, setSidebar, filterData, data }}>
      {children}
    </AppContext.Provider>
  );
};
