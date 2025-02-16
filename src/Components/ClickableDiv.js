import React from 'react';
import '../App.css';

const ClickableDiv = ({ title, text, url }) => {
    const handleClick = () => {
        window.open(url, '_blank'); // Opens the URL in a new tab
    };

    return ( 
        <div onClick={handleClick} className="titles-div">
            <h2 className="titles-text">{title}</h2>
            <span className="titles-font-text">{text}</span>
        </div>
    );
};

export default ClickableDiv;
