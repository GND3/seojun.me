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
        <span className="celebrate_text">무지성으로 살아도</span>
        <span className="celebrate_text">주변 사람들은 잘 챙겨라</span>
        <span className="celebrate_text">객꿀따리 객꿀따</span>
        <span className="celebrate_text">GND3 {'<박서준이여>'}</span>
      </div>
    </div>
  );
};

export default CelebrateParagraph;
