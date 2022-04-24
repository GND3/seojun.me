import React from 'react';
import CarouselImage from '../../components/Carousel/CarouselImage';
import { CAROUSEL_IMAGE_LIST } from './Home.helper';

const Home = (): JSX.Element => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h2>서준 닷미</h2>
      <div style={{ width: 500, height: 350 }}>
        <CarouselImage items={CAROUSEL_IMAGE_LIST} />
      </div>
    </div>
  );
};
export default Home;
