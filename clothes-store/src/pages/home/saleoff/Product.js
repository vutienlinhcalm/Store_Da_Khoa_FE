import React from 'react'
import ProductThumnail from '../../../assets/images/green_shirt.png'
import StarIcon from '@mui/icons-material/Star';

const Product = () => {
  return (
    <div className="single_product">
      <div className="product_thumbnail">
        <img src={ProductThumnail} alt="thumb" />
        <div className="product_size">
          <span>XS</span>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>
      </div>
      <div className="product_description">
        <h4>Leather Gloves</h4>
        <p>Perfect mint green</p>
        <div className="product_description_others">
          <div className="product_description_others_price">
            <span>$42.00</span>
          </div>
          <div className="product_description_others_rating">
            <StarIcon htmlColor='yellow' />
            <span>4.5 (10k review) </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product