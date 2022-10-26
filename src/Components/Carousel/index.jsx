import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const vof = props.vof;
  const titulo = props.titulo;

  return (
    <div className='carouselContain'>
      {
        vof === true ?
          <div className={`titleContain ${titulo.toLowerCase()}`}>
            <h1 className={`mainTitle ${titulo.toLowerCase()}`}>
              {titulo}
            </h1>
          </div>
          :
          null
      }
      <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
        {
          props.array.map(element => {

            return <Carousel.Item interval={2000} key={element}>
              <img
                className="d-block w-100"
                src={element}
                alt="Pileta construcción"
              />
            </Carousel.Item>
          })
        }
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;