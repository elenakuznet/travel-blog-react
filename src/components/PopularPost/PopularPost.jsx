import { useParams } from 'react-router-dom';
import { destinations } from '../../data'; // Import the destinations array
import './PopularPost.css';
import BucketList from '../BucketList/BucketList';

const PopularPost = () => {


  const { index } = useParams();  // Get the index from the URL
  const destination = destinations[index];  // Look up the destination

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="post">
      <h1 className="post__title">{destination.name}</h1>
      {/* <BucketList /> */}
      
      {/* Render each paragraph of content */}
      {destination.content.map((paragraph, idx) => (
        <p key={idx} className="post__content">
          {paragraph}
        </p>
      ))}

      {/* Render each image */}
      {destination.images.map((image, idx) => (
        <img 
          key={idx} 
          src={image.src} 
          alt={image.alt || destination.name} 
          className={image.className || "post__data-img"} 
        />
      ))}
    </div>
  );
};

export default PopularPost;
