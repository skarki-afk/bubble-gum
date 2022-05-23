import { useEffect,useState } from "react";


const Usefetch = (url) =>{
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(true)

    useEffect(()=>{
        fetch(url)
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
    },[url])
return {data, error, isPending};
}
export default Usefetch;