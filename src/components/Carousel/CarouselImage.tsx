import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import { CarouselImageItem } from '../../models/carousel/Carousel.model';
import CustomCarouselControl from './CarouselCustomControl';
import './CarouselImage.css';

interface CarouselImageProps {
  items: CarouselImageItem[];
}

const CarouselImage = ({ items }: CarouselImageProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const onSelectNextImage = () => {
    if (isAnimating) return;

    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const onSelectPrevImage = () => {
    if (isAnimating) return;

    if (activeIndex - 1 < 0) {
      setActiveIndex(items.length - 1);
      return;
    }
    setActiveIndex((prev) => prev - 1);
  };

  const onExiting = () => {
    setIsAnimating(true);
  };

  const onExited = () => {
    setIsAnimating(false);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={`carousel_image_${item.src}`}>
        <div className="carousel-inner-image-container">
          <img className="carousel-inner-image" src={item.src} alt={item.altText} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={onSelectNextImage} previous={onSelectPrevImage}>
      {slides}
      <CustomCarouselControl direction="prev" onClick={onSelectPrevImage} />
      <CustomCarouselControl direction="next" onClick={onSelectNextImage} />
    </Carousel>
  );
};

export default CarouselImage;
