import React from 'react';
import '../App.css';

const HeaderButtons = ({ icon, description = "", url, imgClassName = "round-btn-header-img", scrollToSection }) => {
  const handleClick = () => {
    // Redirect to the provided URL
    if(url != null) window.open(url, '_blank');
    else if (scrollToSection != null) {
      const targetElement = document.getElementById(scrollToSection);
        if (scrollToSection) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };


  return (
    <div className="round-btn-header-div">
      <button onClick={handleClick} className="round-btn-header-btn">
        <img src={icon} alt={description} className={imgClassName} />
      </button>
      <span>{description}</span>
    </div>
  );
};

export default HeaderButtons;
