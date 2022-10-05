import React from 'react'
import './Ratings.css'

const Ratings = () => {
  return (
    <div className="rating-background">
    <h2 className="rating-header"> Our Ratings </h2>
    <div className="rating-box relative md:mb-16 max-w-2xl mx-auto">     
        <img className="rating-image" src="https://chisnghiax.com/ciseco/static/media/clientSayMain.668e4587f020b4c73348.png" alt="rating" />
        <p className="rating-comment">
            "Great quality! Definitely visit again in the future"
        </p>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <span className="fa fa-star star-checked" ></span>
        <span className="fa fa-star star-checked"></span>
        <span className="fa fa-star star-checked"></span>
        <span className="fa fa-star star-checked"></span>
        <span className="fa fa-star star-checked"></span>
        <p className="rating-name">
            - Adam Levine
        </p>
    </div>
    </div>
  )
}

export default Ratings
