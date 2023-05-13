import React from 'react';
import './OpenParagraph.css';

const OpenParagraph = (): JSX.Element => {
  return (
    <div className="open_paragraph">
      <h2 className="open_paragraph_title">모시는 글</h2>
      <span className="open_paragraph_text">
        태어난지 <strong className="strong">9861일</strong> 되는 따뜻한 봄날
      </span>
      <span className="open_paragraph_text">🎉신나는 파티👯‍♂️ 마 한번 쌔릴까 합니다</span>
      <span className="open_paragraph_text">부디 귀한 발걸음 하시어 💃즐겨🕺주시면</span>
      <span className="open_paragraph_text">더없는 기쁨으로 간직하겠습니다</span>
      <span className="open_paragraph_text">가장 🔥뜨거울🔥 그날,</span>
      <span className="open_paragraph_text">소중한 여러분을 초대합니다</span>
    </div>
  );
};

export default OpenParagraph;
