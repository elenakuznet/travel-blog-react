import styles from './PostIntro.module.css';


const PostIntro = ({ intro }) => {
    return (
        <section className={styles['post__section']}>
            <p className={styles['post__intro']}>{ intro }</p>
        </section>
    )
}

export default PostIntro;