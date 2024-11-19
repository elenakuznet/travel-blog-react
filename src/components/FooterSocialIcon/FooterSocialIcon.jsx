import styles from './FooterSocialIcon.module.css';


const FooterSocialIcon = ({ href, iconClass }) => {
    return (
        <a href={href} rel="noopener noreferrer" className={styles['footer__social']}>
            <i className={iconClass}></i>
        </a>

    );
}

export default FooterSocialIcon;