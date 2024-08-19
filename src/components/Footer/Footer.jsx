
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <a href="#" className="footer__logo-link">Travel</a>
        </div>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#popular" className="footer__link">Popular</a>
          </li>
          <li>
            <a href="#explore" className="footer__link">Explore</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://t.me/comewithmetravel" target="_blank" className="footer__social">
            <i class="ri-telegram-line"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="ri-twitter-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;