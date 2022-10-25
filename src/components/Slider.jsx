import { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from '../components/assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '../components/assets/right-arrow.svg';

function Slider({ slides }) {
  //STATES
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oneSlide, setOneSlide] = useState(false);

  //STYLES
  const slideStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const LeftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    filter: 'drop-shadow(1px 1px 4px rgb(0 0 0 / 0.4))',
    zIndex: 1,
    cursor: 'pointer',
  };

  const RightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    filter: 'drop-shadow(1px 1px 4px rgb(0 0 0 / 0.4))',
    zIndex: 1,
    cursor: 'pointer',
  };

  const dotsContainerStyles = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    color: '#ffffff',
  };

  const dotsStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '30px',
    textShadow: '1px 1px 4px rgb(0 0 0 / 0.4)',
    transition: 'transform 0.2s ease-in-out',
  };

  // FUNCTIONS
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const onePicture = () => {
    if (slides.length !== 1) {
      const buttons = (
        <>
          <LeftArrow style={LeftArrowStyles} onClick={goToPrevious} />
          <RightArrow style={RightArrowStyles} onClick={goToNext} />
        </>
      );
    }
  };
  return (
    <section className='slider'>
      <LeftArrow style={LeftArrowStyles} onClick={goToPrevious} />
      <RightArrow style={RightArrowStyles} onClick={goToNext} />
      <div style={slideStyle}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className='dot'
            style={dotsStyles}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
