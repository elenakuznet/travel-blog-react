import Button from '../shared/Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './TelegramSubscription.module.css';

const TelegramSubscription = () => {

    const handleSubscribeClick = () => {
        window.open('https://t.me/comewithmetravel', '_blank', 'noopener norefeerer');
    };
    return (
        <section className={styles['subscription']}>
            <div className={styles['subscription__container']}>
                
                <SectionHeader title={'Subscribe to my Telegram Channel'}/>

                <p className={styles['subscription__description']}>
                Get exclusive updates and news directly in your Telegram.
                </p>
                <Button className='button' icon={<i className="ri-telegram-2-line"></i>}  onClick={handleSubscribeClick}>
                    Subscribe
                </Button>
                
            </div>
        </section>
    );
};

export default TelegramSubscription;
