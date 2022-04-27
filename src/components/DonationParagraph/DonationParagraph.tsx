import React, { useEffect, useState } from 'react';
import './DonationParagraph.css';
import { BANK_ACCOUNT } from './DonationParagraph.helper';

const DonationParagraph = (): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);

  const copyBackAccount = () => {
    if (!document) return;

    const textarea = document.createElement('textarea');
    textarea.value = BANK_ACCOUNT; // 복사할 메시지
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 9999); // For IOS

    document.execCommand('copy');
    document.body.removeChild(textarea);
    setIsCopied(true);
  };

  useEffect(() => {
    if (!isCopied) return () => ({});
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 60000);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <div className="donation_paragraph">
      <h2 className="donation_paragraph_title">파티 후원 및 연락처</h2>
      <button type="button" className="bank_account_btn" onClick={copyBackAccount}>
        {BANK_ACCOUNT} 박서준
      </button>
      {isCopied ? (
        <span className="bank_account_copy_desc emphasize">복사가 완료되었습니다</span>
      ) : (
        <span className="bank_account_copy_desc">계좌번호 클릭 시 복사</span>
      )}
      <span className="donation_text">
        후원 금액은 <span className="bold">전액</span> 파티에 투자됨을 약속드리며
      </span>
      <span className="donation_text">총 후원 금액은 당일 오후 9시에 공개됩니다</span>
      <span className="donation_text bold warning">차액 전부 박서준 부담</span>
      <div className="frog_background_transparent_img_container">
        <img className="frog_background_transparent_img" src="/images/frog.png" alt="crying frog" />
      </div>
    </div>
  );
};

export default DonationParagraph;
