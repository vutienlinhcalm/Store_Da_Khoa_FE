import React from 'react'
import './Filter.css'
import axios from 'axios'

const ListFilter = ({ setProducts }) => {

  const handleClick = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/Product/GetListProductByCategory?category=${category}`)
      const result = await response.data
      const data = result.data
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='filter_list'>
      <div className='filter_item' onClick={() => handleClick("tops")}>
        <span>Tops</span>
      </div>
      <div className='filter_item' onClick={() => handleClick("pants")}>
        <span>Pants</span>
      </div>
      <div className='filter_item' onClick={() => handleClick("skirts")}>
        <span>Skirts</span>
      </div>
      <div className='filter_item' onClick={() => handleClick("t-shirt")}>
        <span>T-shirt</span>
      </div>
      <div className='filter_item' onClick={() => handleClick("shoes")}>
        <span>Shoes</span>
      </div>
    </div>
  )
}

export default ListFilter