import { useEffect,useState } from "react";


const Usefetch = () =>{
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(true)

    useEffect(()=>{
        fetch("http://localhost:8080/flavors")
        .then(res=>{ 
            if(!res.ok){
                throw Error ("couldn't fetch data from resources")
            } 
            return res.json()})
        .then(data=> {
            setData(data)
            setIsPending(false)
        })
        .catch(err => {
            setIsPending(false) 
            setError(err.message)
        })
    },[])
return {data, error, isPending};
}
export default Usefetch;