
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <a href="#" className="footer__logo-link">Travel</a>
        </div>

        <ul className="footer__list">
          {/* <li>
            <a href="#home" className="footer__link">Home</a>
          </li> */}
          <li>
            <NavLink to="/travel-blog-react" className="footer__link" end>Home</NavLink>
          </li>
          
          <li>
            <NavLink to="/travel-blog-react/about" className="footer__link">About</NavLink>
          </li>

          <li>
            <NavLink to="/travel-blog-react/popular" className="footer__link">Popular</NavLink>
          </li>

          <li>
            <NavLink to="/travel-blog-react/explore" className="footer__link">Explore</NavLink>
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