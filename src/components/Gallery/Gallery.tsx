import React from 'react';
import CarouselImage from '../Carousel/CarouselImage';
import { CAROUSEL_IMAGE_LIST } from './Gallery.helper';
import './Gallery.css';

const Gallery = (): JSX.Element => {
  return (
    <div className="gallery_area">
      <h2 className="gallery_area_title">&quot;그&quot;의 20대 갤러리</h2>
      <div className="carousel-image-container">
        <CarouselImage items={CAROUSEL_IMAGE_LIST} />
      </div>
      <a
        className="open_kakao_link"
        target="_blank"
        rel="noreferrer"
        href="https://open.kakao.com/o/g4atL9jf"
      >
        <span className="open_kakao_link_icon">👉</span> 사진 후원 오카방 바로가기
      </a>
    </div>
  );
};

export default Gallery;
