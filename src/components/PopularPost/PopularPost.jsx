import { useParams } from 'react-router-dom';
import { destinations } from '../../data';
import styles from './PopularPost.module.css';
// import './PopularPost.css';

const PopularPost = () => {
  const { index } = useParams();
  const destination = destinations[index];

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className={styles['post']}>
      <h1 className={styles['post__title']}>{destination.name}</h1>

      {/* Introduction Section */}
      <section className={styles['post__section']}>
        <p className={styles['post__intro']}>{destination.intro}</p>
      </section>

      {/* Side-by-Side Layout for Content */}
      <section className={styles['post__section']}>
        {destination.content.map((paragraph, idx) => (
          <div key={idx} className={`${styles['post__row']} ${idx % 2 === 0 ? styles['row-reverse'] : ''}`}>
            <p className={styles['post__content']}>{paragraph}</p>
            {destination.images[idx] && (
              <img
                src={destination.images[idx].src}
                alt={destination.images[idx].alt || destination.name}
                className={styles['post__image']}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PopularPost;

