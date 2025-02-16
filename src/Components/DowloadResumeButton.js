import React from 'react';
import '../App.css';

const DowloadResumeButton = ({ icon, description = "", url, imgClassName = "round-btn-header-img" }) => {
  const handleClick = () => {
    // Redirect to the provided URL
    window.open(url, '_blank');
  };

  return (
    <div className="download-cv-btn-div">
      <button onClick={handleClick} className="download-cv-btn">
        <img src={icon} alt={description} className={imgClassName} />
      </button>
      <span>{description}</span>
    </div>
  );
};

export default DowloadResumeButton;
