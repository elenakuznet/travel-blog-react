import './Footer.css';
import FooterLink from '../FooterLink/FooterLink';
import FooterSocialIcon from '../FooterSocialIcon/FooterSocialIcon';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <a href="#" className="footer__logo-link">Travel with me</a>
        </div>
        
        <ul className="footer__list">
          <FooterLink to="/travel-blog-react" label="Home"/> 
          <FooterLink to="/travel-blog-react/about" label="About" />
          <FooterLink to="/travel-blog-react/popular" label="Popular" />
          <FooterLink to="/travel-blog-react/explore" label="Explore" />
        </ul>

        <div className="footer__socials">
          <FooterSocialIcon href="https://t.me/comewithmetravel" iconClass="ri-telegram-line"/>
          <FooterSocialIcon href="#" iconClass="ri-instagram-line"/>
          <FooterSocialIcon href="#" iconClass="ri-twitter-line"/> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;