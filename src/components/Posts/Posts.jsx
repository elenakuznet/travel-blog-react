import { NavLink } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../shared/Button/Button';
import { destinations } from '../../data';
import './Posts.css';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

const Posts = () => {
  // Extract only the first two destinations
  const displayedPosts = destinations.slice(0, 2);

  return (
    <SectionWrapper>

        <SectionHeader title="My Recent Adventures" />

        <div className="posts__container grid">
          {displayedPosts.map(({ id, name, description, image }) => (
            <NavLink
              to={`/travel-blog-react/popular/${id}`}
              key={id}
              className="post__link"
            >
              <div className="post__container grid">
                <div className="post__data">
                  <h3 className="post__title">{name}</h3>
                  <p className="post__description">{description}</p>
                  <Button className="post__button">
                    Find out more <i className="ri-arrow-right-line"></i>
                  </Button>
                </div>
                <div className="post__image">
                  <img src={image} alt={name} className="post__img" />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        
    </SectionWrapper>
  );
};

export default Posts;