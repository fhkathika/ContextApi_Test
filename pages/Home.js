import React, { useContext } from 'react'
import { TestProvider } from '../context/ContextApi'

export const Home = () => {
    const [data, setdata] = useContext(TestContext);
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
