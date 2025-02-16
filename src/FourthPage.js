import React from 'react';

import messageIsa from './Icons/messageIsa.png';

const FourthPage = () => (


<div className='message-me-page' id='message-me-page'>
    <div className='message-me-page-header-div'>
        <h1>CAN'T WAIT TO HEAR FROM YOU!</h1>
        <img src = {messageIsa} alt="Placeholder" className="message-me-girl" />
    </div>

    <div className='message-me-form-div'>
        <form action="https://formspree.io/f/xzzdjgkw" method="POST" className='message-me-form'>
        <label className='message-me-label'>
            Your Name:
            <input className='message-me-input' type="text" name="name" required />
        </label>
        <label className='message-me-label'>
            Your Email:
            <input className='message-me-input' type="email" name="email" required />
        </label>
            <textarea placeholder='Type your awesome message here...' name="message" required className='message-me-text-area'></textarea>
        <div className='message-me-send-button-div'>
            <button className='message-me-button' type="submit">Send!</button>
        </div>
        </form>
    </div>
</div>

);

export default FourthPage;