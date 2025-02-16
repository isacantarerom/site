import React from 'react';

const ScrollButton = ({ text, targetId }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleScroll} 
      className="first-page-content-btns"
    >
      {text}
    </button>
  );
};

export default ScrollButton;