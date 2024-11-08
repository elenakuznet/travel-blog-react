import styles from './PostImage.module.css';

const PostImage = ({ src, alt, className}) => {
    return (
        <img 
            src={src}
            alt={alt || 'Travel blog image'}
            className={`${styles['post__image']} ${className || ''}`} // Allows custom styling}
        />
    )
}

export default PostImage;