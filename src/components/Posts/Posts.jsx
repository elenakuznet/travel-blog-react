import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './Posts.css';


const posts = [
    {
      title: "Stari Bar, Montenegro",
      description: "The Old Town of Bar in Montenegro, known as Stari Bar, may lie in ruins – but it still has plenty of stories to share with visitors.",
      imageUrl: "/travel-blog-react/img/stari-bar/stari-bar.jpg",
    },
    {
      title: "Kas, Türkiye",
      description: "I first visited Kas years ago on a two-week road trip through Turkey. It was a pretty epic adventure packed with incredible destinations, but nowhere was as memorable as Kas, a small coastal town in the Antalya Province.",
      imageUrl: "/travel-blog-react/img/kas/kas-photo-7.jpg",
    },
    // Add more posts as needed
  ];


const Posts = () => {
    return (
        <section>
            <h2>My recent adventures</h2>
            <div className="posts__container grid">
                {posts.map((post, index) => (
                    <NavLink to={`/travel-blog-react/popular/${index}`} key={index}
            className="post__link">
                        <div className='post__container grid'>
                            <div className="post__data">
                                <h3 className="post__title">{post.title}</h3>
                                <p className="post__description">{post.description}</p>
                                <Button>Find out more</Button>
                            </div>
                            <div className="post__image">
                                <img src={post.imageUrl} alt={post.title} className="post__img" />
                            </div>
                        </div>
                        
                    </NavLink>
                ))}
            </div>
        </section>
    )
}


export default Posts;