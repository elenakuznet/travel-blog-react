import styles from './PostTitle.module.css';

const PostTitle = ({ name }) => {
    return (
        <h1 className={styles['post__title']}>{ name }</h1>
    )
}

export default PostTitle;