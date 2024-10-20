import Button from '../Button/Button';
import './Posts.css';


const Posts = () => {
    return (
        <section>
            <h2>My recent adventures</h2>
            <div className="posts__container grid">
                <div className="post__data">
                    <h3 className="post__title">Stari Bar, Montenegro</h3>
                    <p className="post__description">The Old Town of Bar in Montenegro, known as Stari Bar, may lie in ruins – but it still has plenty of stories to share with visitors.</p>
                    <Button>Find out more</Button>
                </div>
                <div className="post__image">
                    <img src="/travel-blog-react/img/stari-bar/stari-bar.jpg" alt="" className="post__img" />
                </div>
            </div>

        </section>
    )
}

export default Posts;