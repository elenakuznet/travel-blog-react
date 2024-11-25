import styles from './SectionWrapper.module.css';

const SectionWrapper = ({ className, children }) => {
    return (
        <section className={`${styles['section']}  ${className || ''}`}>
            {children}
        </section>
    )

}

export default SectionWrapper;