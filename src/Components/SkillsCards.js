import React, { useState } from "react";

const SkillsCards = ({ imageSrc, title, bulletPoints }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-80 h-64 perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transform transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side (Image) */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={imageSrc}
            alt="Card Front"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Back Side (Info) */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg rotate-y-180 backface-hidden flex flex-col justify-center items-center p-4">
          <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;
