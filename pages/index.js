import React, {useEffect} from "react"
import axios from "axios"

function Home({products}) {
  console.log(products)

  // useEffect(() => {
  //   getProducts()
  // },[])

  // async function getProducts(){
  //   const url = "http://localhost:3000/api/products"
  //   const response = await axios.get(url)
  //   console.log(response.data)
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data in the server
  const url = "http://localhost:3000/api/products"
  const response = await axios.get(url)
  return {products: response.data}
  // return response data as an object

  // note: this objects will be merge with existing props
}

export default Home;
