import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BannerBackground1 from '../../../assets/images/banner-background-1.jpg'
import BannerBackground2 from '../../../assets/images/banner-background-2.jpg'
import BannerBackground3 from '../../../assets/images/banner-background-3.jpg'

const Banner = () => {
  return (
    <Carousel variant="dark" fade="True">

      <Carousel.Item style={{ width: "100%", height: "100%", objectFit: "cover" }} >
        <img src={BannerBackground1} alt="First slide" style={{ background: "#E3FFE6", objectFit: "cover", width: "100%", height: "100%" }} />
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <img src={BannerBackground2} alt="Second slide" style={{ background: "#E3FFE6", objectFit: "cover", width: "100%", height: "100%" }} />
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <img src={BannerBackground3} alt="Third slide" style={{ background: "#E3FFE6", objectFit: "cover", width: "100%", height: "100%" }} />
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner