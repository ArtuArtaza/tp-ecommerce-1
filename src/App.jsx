import { useEffect,useState } from "react"
import CardList from "./components/CardList/CardList"
import useFetch from "./hooks/useFetch"
function App() {
  const {data,loading} = useFetch('https://fakestoreapi.com/products')

  console.log(data)
  return (
    <div className="App">
      {
        loading?
          <h1>is Loading...</h1> 
        : <CardList data={data}/>
      }
    </div>
  )
}

export default App
