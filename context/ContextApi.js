import React, { createContext, useState ,useEffect} from 'react'
import useServices from '../hookTest/useServices';
export const TestContext=createContext()
export  const TestProvider=({children})=> {
  // const [services]=useServices() 
  const allContext=useServices()
 return(
    <TestContext.Provider value={allContext}>
      {children}
    </TestContext.Provider>
  );
}
