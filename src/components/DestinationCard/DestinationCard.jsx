import { NavLink } from 'react-router-dom';
import styles from './DestinationCard.module.css';

const DestinationCard = ({ destination }) => (
    <NavLink 
        to={`/travel-blog-react/popular/${destination.id}`} 
        className={styles['popular__card']}
    >
        <div className={styles['popular__image']}>
            <img src={destination.image} alt={destination.name} className={styles['popular__img']} />
            <div className={styles['popular__shadow']}></div>
        </div>
        <h3 className={styles['popular__name']}>{destination.name}</h3>
        <p className={styles['popular__description']}>{destination.description}</p>
    </NavLink>
);

export default DestinationCard;
