import { useParams } from 'react-router-dom';
import { destinations } from '../../../data';
import styles from './PopularPost.module.css';
import PostTitle from '../PostTitle/PostTitle';
import PostIntro from '../PostIntro/PostIntro';
import PostLayout from '../PostLayout/PostLayout';

const PopularPost = () => {
  const { index } = useParams();
  const destination = destinations[index];

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className={styles['post']}>

      <PostTitle name={destination.name}/>

      <PostIntro intro={destination.intro}/>

      {/* Side-by-Side Layout for Content */}
      <section className={styles['post__section']}>
      {destination.content.map((paragraph, idx) => {
          return (
            <PostLayout 
              key={destination.id + idx}
              content={paragraph} 
              image={destination.images[idx]} 
              reverse={idx % 2 === 0} 
            />
          );
        })}
      </section>
    </div>
  );
};

export default PopularPost;

