import { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/images/arrowLeft.svg';
import rightArrow from '../assets/images/arrowRight.svg';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" className="previous" />
      </button>
      <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carouselImage" />
      <button onClick={nextSlide}>
        <img src={rightArrow} alt="Next" className="next" />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
