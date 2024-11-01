import { NavLink } from "react-router-dom";
import styles from "./Error.module.css";
import Button from "../../components/Button/Button";

const Error = () => {
    return (
        <div className={styles['error-page']}>
        <h1 className={styles['error-page__title']}>404</h1>
        <p className={styles['error-page__text']}>Oops! The page you're looking for doesn't exist.</p>
        <NavLink to="/travel-blog-react">
          <Button>Go Back to Home</Button>
        </NavLink>
      </div>
    )

}

export default Error;