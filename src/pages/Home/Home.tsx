import React, { useCallback, useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Divider from '../../components/Divider/Divider';
import CelebrateParagraph from '../../components/CelebrateParagraph/CelebrateParagraph';
import OpenParagraph from '../../components/OpenParagraph/OpenParagraph';
import PlaceTimeParagraph from '../../components/PlaceTimeParagraph/PlaceTimeParagraph';
import DonationParagraph from '../../components/DonationParagraph/DonationParagraph';
import Gallery from '../../components/Gallery/Gallery';
import './Home.css';

const Home = (): JSX.Element => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);

  const scrollEventListenerCallback = useCallback(() => {
    if (window.scrollY <= 100) {
      setIsScrollOnTop(true);
      return;
    }
    setIsScrollOnTop(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListenerCallback);

    return () => {
      window.removeEventListener('scroll', scrollEventListenerCallback);
    };
  }, [scrollEventListenerCallback]);

  const goToScrollTop = () => {
    if (!window.scrollY) return;

    window.scroll(0, 0);
  };

  return (
    <div className="home-container" ref={scrollAreaRef}>
      <div className="home-scrollable-area">
        {/* 이름/직업 영역 */}
        <div className="title-area">
          <h2 className="home-title">박서준</h2>
          <h3 className="home-sub-title">라포랩스 소프트웨어 엔지니어</h3>
        </div>
        {/* 대문 이미지 */}
        <img className="thumbnail-img" src="/images/seojun-thumbnail.png" alt="seojun thumbnail" />
        <Divider />
        {/* 축사 */}
        <CelebrateParagraph />
        {/* 모시는 글 */}
        <OpenParagraph />
        {/* 일시/장소 */}
        <PlaceTimeParagraph />
        {/* 후원 */}
        <DonationParagraph />
        {/* 연락처 버튼 */}
        <a className="tel_btn" href="tel:01030608922">
          <span>📞 서준이에게 연락하기</span>
        </a>
        {/* 캐로셀 갤러리 */}
        <Gallery />
        {/* 푸터 */}
        <Footer />
        {/* 우하귀 상단 스크롤 버튼 */}
        {!isScrollOnTop && (
          <div className="floating_btn_container">
            <FloatingButton scrollToTop={goToScrollTop} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
