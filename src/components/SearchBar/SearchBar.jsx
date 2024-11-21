import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange, placeholder, ariaLabel }) => {
    
    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles['popular__search']}
                ariaLabel={ariaLabel}
            />
        </>
    )
}

export default SearchBar;