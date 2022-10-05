import React from 'react'

const Ratings = () => {
  return (
    <div class="rating-background">
    <h2 class="rating-header"> Our Ratings </h2>
    <div class="rating-box relative md:mb-16 max-w-2xl mx-auto">     
        <img class="rating-image" src="https://chisnghiax.com/ciseco/static/media/clientSayMain.668e4587f020b4c73348.png" alt></img>
        <p class="rating-comment">
            "Great quality! Definitely visit again in the future"
        </p>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <span class="fa fa-star star-checked" ></span>
        <span class="fa fa-star star-checked"></span>
        <span class="fa fa-star star-checked"></span>
        <span class="fa fa-star star-checked"></span>
        <span class="fa fa-star star-checked"></span>
        <p class="rating-name">
            - Adam Levine
        </p>
    </div>
    </div>
  )
}

export default Ratings
