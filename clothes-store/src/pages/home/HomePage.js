import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BannerBackground from '../../assets/images/Moon.bf27dc577d1acccaba48430d353dbbe0.svg'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>

      {/* Banner */}
      <div className="container">

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

        {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className="d-block w-100" src={BannerBackground} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img className="d-block w-100" src={BannerBackground} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img className="d-block w-100" src={BannerBackground} alt="Third slide" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

      </div>

      {/* News */}
      <div className="container">

      </div>

      {/* Trending */}
      <div className="container">

      </div>

      {/* Rating */}
      <div className="container">

      </div>

    </div>
  )
}

export default HomePage