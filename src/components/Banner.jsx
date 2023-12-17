import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner0.jpeg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner1.jpeg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner2.jpeg"
          alt="Third slide"
        />
     </Carousel.Item>
    </Carousel>
  )
}

export default Banner