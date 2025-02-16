import React from 'react';

import download from './Icons/download.png';
import CompanyCard from './Components/CompanyCard';
import oracle from './Icons/oracleLogo.png';
import ms from './Icons/MicrosoftLogo.png';
import qc from './Icons/QCOM.png';
import workingGirl from './Icons/workIsa.png';

const SecondPage = () => (
    

  <div className='page second-page' id='second-page'>
     {/* First Section: Download Resume | WORK EXPERIENCE Title | Image Working Lady*/}
     <div className='second-page-header'>
        {/* Round Button Download Resume and text */}
        <div className="download-cv-btn">
            <a href="/SE-IsaCantarero.pdf" download="SE-IsaCantarero.pdf">
                <img src = {download} alt="Placeholder" className="round-btn-header-img" />
            </a>
            <h3 className='download-cv-text'>Dowload Resume</h3>
        </div>

        {/* Work title and image */}
        <div className='second-page-work-div'>
            {/* Text: WORK EXPERIENCE */}
            <div className="second-page-title-div">
                <h2 className="second-page-title">WORK</h2>
                <h2 className="second-page-title">EXPERIENCE</h2>
            </div>

            {/* Image Working Lady */}
            <div className="second-page-girl-div">
                <img src = {workingGirl} alt="Placeholder" className="first-page-girl-img" />
            </div>
        </div>  
     </div>
     <div className='company-card-titles-div'>
            <CompanyCard
                icon = {oracle}
                iconClass={'company-card-icon-oracle'}
                title = {'Oracle'} 
                date = {'Jan 2018 - Oct 2021'}
                texts = {[<>I worked on Web Development for
                <a className='company-card-hyperlink' href="https://docs.oracle.com/en/cloud/saas/adaptive-intelligent-apps/aigsd/early-payment-discounts.html" target="_blank" rel="noopener noreferrer"> Adaptive Intelligence Early Payment Discounts</a>.
                <br /> The project had a microservices structure and I was the UI Lead! I also drove the Automation project, served as Scrum Master and intervened on the backend. I learned so much about so many different things. My favorite part you may ask? The people!</>,
                 'Coding Languages: JavaScript, Java']}
            ></CompanyCard>
            <CompanyCard
                icon = {ms}
                iconClass={'company-card-icon'}
                title = {'Microsoft'} 
                date = {'Oct 2021 - Mar 2023'} 
                texts = {[<>I worked on XR Development for
                <a className='company-card-hyperlink' href="https://www.microsoft.com/en-us/microsoft-teams/microsoft-mesh" target="_blank" rel="noopener noreferrer"> Microsoft Mesh. </a>
                If you go on 'edit mode' and edit rooms, that is exactly what I worked on! <br /> I also got to advocate for the accessibility of 
                <a className='company-card-hyperlink' href="https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/" target="_blank" rel="noopener noreferrer"> Microsoft Mixed Reality Toolkit (MRTK) </a>
                components. <br/>I researched about legal, created personas, and a plan based on priorities.. I found this process so interesting that it inspired me to take a course on Project Management."</>,
                    "Coding Languages: C#"]}
            ></CompanyCard>
            <CompanyCard
                icon = {qc}
                iconClass={'company-card-icon'}
                title = {'Qualcomm'}
                date = {'Apr 2023 - Sep 2024'} 
                texts={[
                    <>
                      I worked on the development of Qualcomm's System Shell for 
                      <a className='company-card-hyperlink' href="https://www.qualcomm.com/products/mobile/snapdragon/xr-vr-ar/snapdragon-xr2-gen-2-platform?&cmpid=pdsrc-JmW4rVRYGT&utm_medium=pdsrc&utm_source=AW&utm_campaign=FS-XR&_bt=689448412705&_bk=qualcomm%20xr&_bm=e&_bn=g&_bg=134018438337&gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4tihOhUfccL4DO2LPb56Rqw2PcC6mjA_ryAXKKc3fHbjdtjUj0za9hoC4BoQAvD_BwE" target="_blank" rel="noopener noreferrer"> Snapdragons XR. </a> 
                      <br />
                      So basically, if you use any XR headset that is powered by Snapdragons chipset and it works... I WORKED ON THAT! How lucky am I to be able to say that, right?
                    </>,
                    "Coding Languages: C#"
                  ]}
            ></CompanyCard>
    </div>
     
  </div>
);

export default SecondPage;