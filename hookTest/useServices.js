 import { useEffect, useState } from "react"

const useServices =()=>{
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://hrazy.com/flash-offers-all')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])
    return ([services])
}
export default useServices;