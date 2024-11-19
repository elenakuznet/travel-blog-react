import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange, placeholder }) => {
    
    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles['popular__search']}
            />
        </>
    )
}

export default SearchBar;