import React, { createContext, useState } from 'react'
export const TestContext=createContext()
export  const TestProvider=(props)=> {
    const [data, setData] = useState([
      {
        name: "pizza",
        price: "620",
        id: "1",
      },
      {
        name: "Burger",
        price: "220",
        id: "1",
      },
      {
        name: "juice",
        price: "120",
        id: "3",
      },
    ]);
  return (
    <TestContext.Provider value={[data, setData]}>
      {props.children}
    </TestContext.Provider>
  );
}
