import styles from './SectionHeader.module.css';

const SectionHeader = ({ title }) => {
    return (
        <header>
          <h2 className={styles['title']}>{title}</h2>
        </header>
    )
}

export default SectionHeader;