 import { useEffect, useState } from "react"

const useServices =()=>{
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://serene-bayou-12088.herokuapp.com/showItems')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])
    return ([services])
}
export default useServices;