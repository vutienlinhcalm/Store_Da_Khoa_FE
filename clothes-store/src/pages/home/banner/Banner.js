import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BannerBackground from '../../../assets/images/banner-background-0.svg'

const Banner = () => {
  return (
    <Carousel variant="dark" fade="True">
        
        <Carousel.Item>
          <img className="d-block w-100" src={BannerBackground} alt="First slide" style={{background:"#E3FFE6"}} />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>
              Decription
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BannerBackground} alt="Second slide" style={{background:"#E3FFE6"}} />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>
              Decription
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BannerBackground} alt="Third slide" style={{background:"#E3FFE6"}} />
          <Carousel.Caption className="caption_new">
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default Banner