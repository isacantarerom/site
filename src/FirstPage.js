import React from 'react';

import HeaderButtons from './Components/HeaderButtons';
//import HeaderTitle from './Components/ClickableDiv';
import girl from './Icons/hiIsa.png';
import linkedInIcon from './Icons/linkedInBlackLogo.png'
import messageIcon from './Icons/dmme.png'
import ScrollButton from './Components/ScrollButton';

const FirstPage = () => (
  <div className='first-page'>
    {/* First Section: Three Items Distributed Across the Width */}
    <div className="flex justify-center items-center">
      <div className="header">
        {/* Left Button */}
        <HeaderButtons 
            icon={linkedInIcon}
            description="LinkedIn" 
            url={"https://www.linkedin.com/in/isa-cantarero-525306b5/"}
        />
        
        {/* Title */}
        <div className="titles-div">
            <h2 className="titles-text">ISA CANTARERO</h2>
        </div>
        
        {/* Right Button */}
        <HeaderButtons 
            icon={messageIcon}
            description="Message Me!" 
            scrollToSection={'message-me-page'}
        />
      </div>
    </div>

    {/* Second Section: Centered Image */}
    <div className="first-page-girl-div">
    <span className="titles-font-text">software engineer</span>
      <img src = {girl} alt="Placeholder" className="first-page-girl-img" />
    </div>

    {/* Third Section: Div with Left and Right Sections */}
    <div className="first-page-content-div">
       <div className="first-page-content-text-div">
        {/* Left Section: Image and Text */}
            <div className='overlap-container'>
              <h2 className='overlap-title'>ISA</h2>
              <span className='overlap-span'>/ˈee·sah/ noun</span>
            </div>
            <span className='first-page-content-line-text'>| COOKIE MONSTER  · DALMATIAN LOVER ·  COFFEE ADDICT |</span>
            <div className='first-page-description'>
            <p>
                1. Lover of clean aesthetics, colorful outfits, her Dalmatian puppy, and a good laugh.
            </p> 
            <p>   
                2. Firm believer in growth and never-ending evolution. Believes in willingness and showing up more than she believes in talent. Chooses humanity over perfection and—like Audrey Hepburn—believes in pink.
            </p>
            </div>     
        </div>

        {/* Right Section: Stacked Buttons */}
        <div className="first-page-content-buttons-div">
          <ScrollButton
            targetId={'second-page'}
            text="WORK EXPERIENCE"
          >
          </ScrollButton>
          <ScrollButton
          targetId={'third-page'}
            text="TECH SKILLS"
          >
          </ScrollButton>
        </div>
      
    </div>
  </div>
);

export default FirstPage;