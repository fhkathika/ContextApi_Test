import React, { useContext } from 'react'
import { TestContext, TestProvider } from '../context/ContextApi'
import useAuth from '../hookTest/useAuth';
import useServices from '../hookTest/useServices';

  const Home = () => {
    // const [services]=useServices()
  //  const {services}=useAuth()
  const [data,setdata]=useContext(TestContext)
  return (
    <div>
      <h1>h welcome to home page: {data?.length}</h1>
      {/* {
        data.map(info=><h2>{info.name}</h2>)
      } */}
         {/* {
            data.map(info=>
                <h1 key={info.id}>
                    {info.phone}
                </h1>)
        } */}
      {  data.map(info=>
      <h1 key={info.id}>{info.phone}</h1>)
      }
      
    </div>
  );
}
export default Home
