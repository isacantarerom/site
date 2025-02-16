import React from 'react';
import '../App.css';

const CompanyCard = ({icon, iconClass, title, date, texts }) => {
    

    return ( 
        <div className='company-card-div'> {/* Flex with column arrangement */}

        <div className='company-card-header-div'> {/* Div Title with flex and space between */}
            <div className='company-card-icon-div'> {/* Here lives the icon */}
                <img src={icon} alt='Company Icon' className={iconClass} />
            </div>
            <div className='company-card-header-title'> {/* Div with flex and column direction */}
                <h3 className='company-card-name'>{title}</h3>
                <span className='company-card-date'>{date}</span>
            </div>
        </div>

        <div className='company-card-info-div'> {/* Here lives the info for the company */}
            {texts.map((text, index) => (
                <p key={index} className="">
                    {text}
                </p> 
            ))}
        </div>


            
        </div>
    );
};

export default CompanyCard;
