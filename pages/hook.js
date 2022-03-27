import { TestContext } from "../context/ContextApi";
import useServices from "../hookTest/useServices";
import React, { useContext } from 'react'
const hook = ({articles}) => {
    const [services]=useServices()
    const [data,setdata]=useContext(TestContext)
 console.log(articles)
    return (
      <div>
        <h1>hooks</h1>
        {
            services.map(service=>
                <h1 key={service.id}>
                    {service.phone}
                </h1>)
        }
      </div>
    );
  }
  export default hook
//   export const getStaticProps = async()=>{
//     const res=await fetch('https://jsonplaceholder.typicode.com/users')
//     const articles=await res.json()
//     return{
//         props:{
//             articles
//         }
//     }
// }