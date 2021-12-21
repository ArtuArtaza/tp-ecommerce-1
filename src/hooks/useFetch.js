import {useState,useEffect} from 'react'
const useFetch = (url) => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            setData(data)
            setLoading(false)
        })
      },[url])

    return {data,loading}
}

export default useFetch