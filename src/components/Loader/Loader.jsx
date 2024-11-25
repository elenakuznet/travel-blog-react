import styles from './Loader.module.css';


const Loader = ( {message = "Loading..."}) => {
    return (
        <div className={styles['loader-container']}>
            <div className={styles['spinner']}></div>
            <p>{message}</p>
        </div>
    )
}

export default Loader;