import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import { CarouselImageItem } from '../../models/carousel/Carousel.model';

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
        <img style={{ width: '100%', height: '100%' }} src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={onSelectNextImage} previous={onSelectPrevImage}>
      {slides}
      <CarouselControl direction="prev" directionText="다음" onClickHandler={onSelectPrevImage} />
      <CarouselControl direction="next" directionText="이전" onClickHandler={onSelectNextImage} />
    </Carousel>
  );
};

export default CarouselImage;
