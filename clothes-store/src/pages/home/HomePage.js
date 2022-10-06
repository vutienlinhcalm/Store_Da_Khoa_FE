import React from 'react'
import Ratings from './ratings/Ratings';
import './HomePage.css'
import Banner from './banner/Banner';
import ListProductSaleOff from './saleoff/ListProductSaleOff';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListProductSaleOff />
      <Ratings/>
    </div>
  )
}

export default HomePage