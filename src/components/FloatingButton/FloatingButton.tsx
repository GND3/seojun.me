import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './FloatingButton.css';

interface FloatingButtonProps {
  scrollToTop: () => void;
}

const FloatingButton = ({ scrollToTop }: FloatingButtonProps): JSX.Element => {
  return (
    <button type="button" className="floating_btn" onClick={scrollToTop}>
      <FiArrowUp className="arrow_up_icon" />
    </button>
  );
};

export default FloatingButton;
