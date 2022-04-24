import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import { CarouselImageItem } from '../../models/carousel/Carousel.model';
import CustomCarouselControl from './CarouselCustomControl';
import './CarouselImage.css';

interface CarouselImageProps {
  items: CarouselImageItem[];
}

const CarouselImage = ({ items }: CarouselImageProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelectNextImage = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const onSelectPrevImage = () => {
    if (activeIndex - 1 < 0) {
      setActiveIndex(items.length - 1);
      return;
    }
    setActiveIndex((prev) => prev - 1);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem key={`carousel_image_${item.src}`}>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
            style={{ height: '100%', maxHeight: '100%', width: 'auto' }}
            src={item.src}
            alt={item.altText}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={onSelectNextImage} previous={onSelectPrevImage}>
      {slides}
      <CustomCarouselControl direction="prev" onClick={onSelectPrevImage} />
      <CustomCarouselControl direction="next" onClick={onSelectNextImage} />
      {/* <CarouselControl direction="prev" onClickHandler={onSelectPrevImage} />
      <CarouselControl direction="next" onClickHandler={onSelectNextImage} /> */}
    </Carousel>
  );
};

export default CarouselImage;
