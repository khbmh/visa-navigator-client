import { createContext, useEffect } from 'react';

export const DataContext = createContext();

function DataContextProvider(children) {

useEffect(()=>{},[])


  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
