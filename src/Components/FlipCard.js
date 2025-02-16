import React, { useState } from "react";

const FlipCard = ({ imageSrc, title, bulletPoints }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-card-inner">
        {/* Front Side (Image) */}
        <div className="flip-card-front">
          <img className="flip-card-image" src={imageSrc} alt="Card Front" />
          <span>{title}</span>
        </div>

        {/* Back Side (Info) */}
        <div className="flip-card-back">
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
