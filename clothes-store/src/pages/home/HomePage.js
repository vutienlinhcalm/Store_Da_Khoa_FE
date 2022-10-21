import React from 'react'
import Ratings from './ratings/Ratings';
import './HomePage.css'
import Banner from './banner/Banner';
import ListProductSaleOff from './saleoff/ListProductSaleOff';
import ListProductTrending from './trending/ListProductTrending';
const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListProductSaleOff />
      <ListProductTrending />
      <Ratings/>
    </div>
  )
}

export default HomePage