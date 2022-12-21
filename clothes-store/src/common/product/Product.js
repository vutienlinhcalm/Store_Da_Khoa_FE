import React from 'react'
import { useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'

const Product = ({ info }) => {
  const navigate = useNavigate()
  return (
    <div className="single_product" onClick={() => navigate(`${info?.productId}`)}>
      <div className="product_thumbnail">
        <img src={info?.mainImage} alt="thumb" style={
          {
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }
        } />
        <div className="product_size">
          <span>XS</span>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>
      </div>
      <div className="product_description">
        <h4>{info?.productName}</h4>
        <p style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{info?.description}</p>
        <div className="product_description_others">
          <div className="product_description_others_price">
            <span>${info?.price}</span>
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