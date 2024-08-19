import React from 'react';
import './PopularCard.css'; 
import { Link } from 'react-router-dom';

function PopularCard({ link, imageSrc, title, location }) {
  return (
    <Link to={link} className="popular__card">
      <div className="popular__image">
        <img src={imageSrc} alt="popular image" className="popular__img" />
        <div className="popular__shadow"></div>
      </div>
      <h2 className="popular__title">{title}</h2>
      <div className="popular__location">
        <i className="ri-map-pin-line"></i>
        <span className="popular__pin">{location}</span>
      </div>
    </Link>
  );
}

export default PopularCard;