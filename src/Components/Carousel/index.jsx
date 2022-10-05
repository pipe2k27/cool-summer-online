import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function ControlledCarousel(array) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
      {
        array.array.map(element => {

          return <Carousel.Item key={element}>
            <img
              className="d-block w-100"
              src={element}
              alt="Pileta construcción"
            />
          </Carousel.Item>
        })
      }
    </Carousel>
  );
}

export default ControlledCarousel;