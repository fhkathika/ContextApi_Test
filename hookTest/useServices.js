 import { useEffect, useState } from "react"

const useServices =()=>{
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://radiant-fjord-34383.herokuapp.com/foodItems')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])
    return ([services])
}
export default useServices;