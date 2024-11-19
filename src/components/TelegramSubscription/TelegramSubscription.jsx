import React from 'react';
import './TelegramSubscription.css';  // Add your styles here
import Button from '../shared/Button/Button';

const TelegramSubscription = () => {
    const handleSubscribeClick = () => {
        window.open('https://t.me/comewithmetravel', '_blank', 'noopener norefeerer');
    };
    return (
        <section className="telegram-subscription">
        <div className="telegram-subscription__container">
            <h3 className="telegram-subscription__title">Subscribe to my Telegram Channel</h3>
            <p className="telegram-subscription__description">
            Get exclusive updates and news directly in your Telegram.
            </p>
            <Button className='button telegram-subscription__button' onClick={handleSubscribeClick}>
           Subscribe <i class="ri-telegram-2-line"></i>
            </Button>
            
        </div>
        </section>
    );
};

export default TelegramSubscription;
