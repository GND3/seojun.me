import React from 'react';
import './CarouselCustomControl.css';

interface CustomCarouselControlProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const CustomCarouselControl = ({ direction, onClick }: CustomCarouselControlProps): JSX.Element => {
  return (
    <button type="button" className={`carousel-custom-control ${direction}`} onClick={onClick}>
      <span className={`carousel-custom-control-${direction}-icon`} />
    </button>
  );
};

export default CustomCarouselControl;
