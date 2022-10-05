import React from 'react'
import Ratings from './ratings/Ratings';
import './HomePage.css'
import Banner from './banner/Banner';

const HomePage = () => {
  return (
    <div>
        <Banner />
        <Ratings/>
    </div>
  )
}

export default HomePage