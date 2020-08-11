import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';
import { render } from 'enzyme';

const ControlledCarousel = ({ productId }) => {
  const [index, setIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentProductId, setCurrentProductId] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    Axios.get(`http://52.26.193.201:3000/products/${productId}/styles`).then(
      (res) => {
        setIsLoaded(true);
        setCurrentProductId(res.data.results[currentStyle]);
      },
      (err) => {
        setIsLoaded(true);
        console.log(err);
      }
    );
  }, [currentStyle]);

  const renderThumbnails = () =>
    (currentProductId.photos ? (
      currentProductId.photos.map((thumbnail, i) => (
        <img
          className="d-block thumbnail-image"
          src={thumbnail.url}
          alt="thumbnail"
          onClick={() => setIndex(i)}
        />
      ))
    ) : (
      <div>Error! Try reloading...</div>
    ));

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={false}
        interval={null}
        wrap={false}
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {currentProductId.photos ? (
          currentProductId.photos.map((photo) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={photo.url}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        ) : (
          <div>Error! Try reloading...</div>
        )}
      </Carousel>

      <div className="thumbnails-container">
        <div className="thumnails-list">{renderThumbnails()}</div>
      </div>
    </div>
  );
};

export default ControlledCarousel;