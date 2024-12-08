import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allvisa')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export default DataContextProvider;
