import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap'
import BannerBackground from '../../assets/images/banner-background-0.svg'
<<<<<<< HEAD
import Ratings from './ratings/Ratings';
=======
import './HomePage.css'

>>>>>>> 21e0a34e4ac84f43dd19ed17a3ad082c2ccd95b7
const HomePage = () => {
  return (
    <div>

      {/* Banner */}
<<<<<<< HEAD
      <Container>

        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={BannerBackground} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>
                Description
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BannerBackground} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>
                Description
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BannerBackground} alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Description
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Container>
=======
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
>>>>>>> 21e0a34e4ac84f43dd19ed17a3ad082c2ccd95b7

      {/* News */}
      <Container>



      </Container>

      {/* Trending */}
      <Container>

      </Container>

      {/* Rating */}
<<<<<<< HEAD
      <Container>
        <Ratings/>
      </Container>
=======
      
>>>>>>> 21e0a34e4ac84f43dd19ed17a3ad082c2ccd95b7

    </div>
  )
}

export default HomePage