import PostImage from '../PostImage/PostImage';
import styles from './PostLayout.module.css';

const PostLayout = ({ content, image, reverse}) => {
    return (
        <div className={`${styles['post__row']} ${reverse? styles['row-reverse'] : ''}`}>
            <p className={styles['post__content']}>{content}</p>
            {image && (
                <PostImage src={image.src} alt={image.alt} className={styles['post__image']}/>
            )}
        </div>
    )
}

export default PostLayout;