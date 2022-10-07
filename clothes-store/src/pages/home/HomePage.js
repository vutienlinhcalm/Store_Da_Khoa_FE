import React from 'react'
import Ratings from './ratings/Ratings';
import './HomePage.css'
import Banner from './banner/Banner';
import SaleOffProduct from './saleoffproduct/SaleOffProduct';

const HomePage = () => {
  return (
    <div>
        <Banner />
        <Ratings/>
        <SaleOffProduct />
    </div>
  )
}

export default HomePage