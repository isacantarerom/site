import React from 'react';

import FlipCard from './Components/FlipCard.js'
import skilledIsa from './Icons/skilledIsa.png'
import web from './Icons/web.png';
import coding from './Icons/codingLanguages.png';
import xr from './Icons/xr.png'
import test from './Icons/testing.png';
import cicd from './Icons/cicd.png';
import versionControl from './Icons/versionControl.png';
import managementTools from './Icons/managementTools.png';
import softSkills from './Icons/softSkills.png';


const ThirdPage = () => (

  <div className='third-page' id='third-page'>

    <div className='third-page-header'>
        {/* Round Button Download Resume and text */}
        <div className="third-page-div">
            <img src = {skilledIsa} alt="Placeholder" className="first-page-girl-img" />
            <h2 className='third-page-title'>SKILLS</h2>
        </div>
     </div>


    
    <div className='flip-cards-section-div'>
        <div className='flip-cards-div'>
            <FlipCard
                imageSrc={coding}
                title="Programming Languages"
                bulletPoints={[
                    "JavaScript",
                    "C#",
                    "Java",
                    "TypeScript"
                ]}
            />

            <FlipCard
                imageSrc={web}
                title="Web Technologies"
                bulletPoints={[
                    "HTML",
                    "CSS",
                    "React",
                    "Knockout",
                    "RequireJS",
                    "Oracle Jet"
                ]}
            />
            

            <FlipCard
                imageSrc={xr}
                title="Game & XR Development"
                bulletPoints={[
                    "Unity",
                    "MRTK",
                    "StereoKit"
                ]}
            />

            <FlipCard
                imageSrc={test}
                title="Testing & Automation"
                bulletPoints={[
                    "QUnit", 
                    "Selenium", 
                    "PowerMockito", 
                    "Karma", 
                    "Mocha"
                ]}
            />
        </div>

        <div className='flip-cards-div'>
            <FlipCard
                imageSrc={cicd}
                title="CI/CD & Build Tools:"
                bulletPoints={[
                    "Jenkins"
                ]}
                />

            <FlipCard
                imageSrc={versionControl}
                title="Version Control:"
                bulletPoints={[
                    "Git"
                ]}
            />

            <FlipCard
                imageSrc={managementTools}
                title="Management Tools"
                bulletPoints={[
                    "Agile",
                    "JIRA",
                    "Microsoft Boards",
                    "Confluence",
                    "Notion"
                ]}
            />
            <FlipCard
                imageSrc={softSkills}
                title="Soft Skills"
                bulletPoints={[
                    "Handling Ambiguity",
                    "Continuous Learner",
                    "Proactive",
                    "Drive for Excellence",
                    "Collaboration",
                    "Open to Feedback"
                ]}
            />
        </div>

    </div>
     



    </div>


//second part:
/**
 * 
 * 
 * 
 */
 

);

export default ThirdPage;