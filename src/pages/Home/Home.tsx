import React from 'react';
import { Carousel, CarouselIndicators, CarouselItem } from 'reactstrap';

const Home = (): JSX.Element => {
  const numberOfTotalImages = 21;
  return (
    <Carousel activeIndex={0}>
      {Array.from({ length: numberOfTotalImages }, (x, i) => i).map((index) => (
        <CarouselItem>
          <img src="../../" />
        </CarouselItem>
      ))}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={function noRefCheck() {}}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={function noRefCheck() {}}
      />
    </Carousel>
  );
};
export default Home;
