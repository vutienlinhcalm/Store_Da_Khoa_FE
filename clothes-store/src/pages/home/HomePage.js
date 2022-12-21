import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Ratings from './ratings/Ratings';
import './HomePage.css'
import Banner from './banner/Banner';
import ListProductSaleOff from './saleoff/ListProductSaleOff';
import ListProductTrending from './trending/ListProductTrending';
const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get("http://localhost:5001/api/Product/GetListProduct")
      const products = await response.data
      setProducts(products.data)
      console.log(products.data)
    }
    getAllProducts()
  }, [])
  return (
    <div>
      <Banner />
      <ListProductSaleOff products={products} />
      <ListProductTrending products={products} />
      <Ratings />
    </div>
  )
}

export default HomePage