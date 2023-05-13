import React from 'react';
import './CelebrateParagraph.css';

const CelebrateParagraph = (): JSX.Element => {
  return (
    <div className="celebrate_paragraph">
      <div className="background_transparent_img_container">
        <img className="background_transparent_img" src="images/gnd.png" alt="gnd background img" />
      </div>
      <img className="sloth_img" src="/images/sloth.png" alt="sloth img" />
      <div className="celebrate_paragraph_text_area">
        <span className="celebrate_text">제 아무리 무지성으로 살아도</span>
        <span className="celebrate_text">이런 날은 잘 챙기는구나</span>
        <span className="celebrate_text">행복하자</span>
        <span className="celebrate_text">From. GND3</span>
      </div>
    </div>
  );
};

export default CelebrateParagraph;
