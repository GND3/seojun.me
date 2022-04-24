import React from 'react';
import { differenceInDays, format } from 'date-fns';
import CarouselImage from '../../components/Carousel/CarouselImage';
import { CAROUSEL_IMAGE_LIST } from './Home.helper';
import './Home.css';

const CLOSING_DAY = new Date('2022-05-27');

const Home = (): JSX.Element => {
  return (
    <div className="home-container">
      <div className="home-scrollable-area">
        <h2 className="home-title">서준 닷미</h2>
        <div className="carousel-image-container">
          <CarouselImage items={CAROUSEL_IMAGE_LIST} />
        </div>
        <div className="date-area">
          <p className="closing-day">{format(CLOSING_DAY, 'yyyy년 MM월 dd일')}</p>
          <p className="d-day">D{differenceInDays(new Date(), CLOSING_DAY)}</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
