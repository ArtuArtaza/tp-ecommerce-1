import {useState,useEffect} from 'react'
const useFetch = (url) => {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=> {
        fetch(url)
        .then(res => {
            setLoading(true)
            return res.json()
        })
        .catch(err => setError(err))
        .then(d => {
            setData(d)
            setLoading(false)
        })
    },[url])

    return [data,loading,error]
}

export default useFetch