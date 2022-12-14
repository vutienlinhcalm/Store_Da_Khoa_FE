import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryPage from './categoryPage/CategoryPage'
import ProductDetail from './productDetail/ProductDetail'

const CategoryIndex = ({ productsInCart, setProductsInCart }) => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CategoryPage />}></Route>
        <Route path="/:id" element={<ProductDetail productsInCart={productsInCart} setProductsInCart={setProductsInCart} />}></Route>
      </Routes>

    </div>
  )
}

export default CategoryIndex