import React from 'react';
import './DonationParagraph.css';

const DonationParagraph = (): JSX.Element => {
  const copyBackAccount = () => {
    // TODO: 복사 안됨. 확인 필요
    if (!document) return;

    const textarea = document.createElement('textarea');
    textarea.value = 'message'; // 복사할 메시지
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 9999); // For IOS

    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className="donation_paragraph">
      <div className="frog_background_transparent_img_container">
        <img className="frog_background_transparent_img" src="/images/frog.png" alt="crying frog" />
      </div>
      <h2 className="donation_paragraph_title">파티 후원 및 연락처</h2>
      <button type="button" className="bank_account_btn" onClick={copyBackAccount}>
        하나은행 18991031489707 박서준
      </button>
      <span className="bank_account_copy_desc">계좌번호 클릭 시 복사</span>
      <span className="donation_text">
        후원 금액은 <span className="bold">전액</span> 파티에 투자됨을 약속드리며
      </span>
      <span className="donation_text">총 후원 금액은 당일 오후 9시에 공개됩니다</span>
      <span className="donation_text bold warning">차액 전부 박서준 부담</span>
    </div>
  );
};

export default DonationParagraph;
