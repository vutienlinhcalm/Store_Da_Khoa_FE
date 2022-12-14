import React, { useState } from 'react'
import './Filter.css'
import axios from 'axios'

const ListFilter = ({ setProducts }) => {
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleClick = async (category) => {
    try {
      if (category === "all") {
        const response = await axios.get("http://localhost:5001/api/Product/GetListProduct")
        const products = await response.data
        setProducts(products.data)
      } else {
        const response = await axios.get(`http://localhost:5001/api/Product/GetListProductByCategory?category=${category}`)
        const result = await response.data
        const data = result.data
        setProducts(data)
      }
      setSelectedFilter(category)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='filter_list'>
      <div className={`filter_item ${selectedFilter === "all" && "active"}`} onClick={() => handleClick("all")}>
        <span>All</span>
      </div>
      <div className={`filter_item ${selectedFilter === "tops" && "active"}`} onClick={() => handleClick("tops")}>
        <span>Tops</span>
      </div>
      <div className={`filter_item ${selectedFilter === "pants" && "active"}`} onClick={() => handleClick("pants")}>
        <span>Pants</span>
      </div>
      <div className={`filter_item ${selectedFilter === "skirts" && "active"}`} onClick={() => handleClick("skirts")}>
        <span>Skirts</span>
      </div>
      <div className={`filter_item ${selectedFilter === "t-shirt" && "active"}`} onClick={() => handleClick("t-shirt")}>
        <span>T-shirt</span>
      </div>
      <div className={`filter_item ${selectedFilter === "shoes" && "active"}`} onClick={() => handleClick("shoes")}>
        <span>Shoes</span>
      </div>
    </div>
  )
}

export default ListFilter