import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap'
import BannerBackground from '../../assets/images/banner-background-0.svg'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>

      {/* Banner */}
      <Container>

        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={BannerBackground} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>
                Decription
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BannerBackground} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>
                Decription
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BannerBackground} alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Decription
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Container>

      {/* News */}
      <Container>

      </Container>

      {/* Trending */}
      <Container>

      </Container>

      {/* Rating */}
      <Container>

      </Container>

    </div>
  )
}

export default HomePage