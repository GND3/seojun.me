import React from 'react';
import CarouselImage from '../../components/Carousel/CarouselImage';
import { CAROUSEL_IMAGE_LIST } from './Home.helper';

const Home = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 756,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ marginTop: 20 }}>서준 닷미</h2>
        <div style={{ width: '100%', height: 450, marginTop: 20 }}>
          <CarouselImage items={CAROUSEL_IMAGE_LIST} />
        </div>
      </div>
    </div>
  );
};
export default Home;
