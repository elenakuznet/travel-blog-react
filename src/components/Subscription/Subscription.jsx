import { useForm } from "react-hook-form";
import styles from './Subscription.module.css';
import Button from "../shared/Button/Button";

const Subscription = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Email submitted:', data.email);
        alert('Thank you for subscribing!');
    }

    return (
        <section className="section">
            <div className={styles['subscription']}>
                <div className={styles['subscription__image']}>
                <img src="/travel-blog-react/img/subscription.jpg" className={styles['subscription__img']} alt="Emily traveling" />
                </div>
                
                <div className={styles['subscription__content']}>
                    <h2 className={styles['subscription__title']}>Subscribe to Newsletter</h2>
                    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            className={styles['input-email']}
                            type="email"
                            placeholder="Enter your email" 
                            aria-label="Email Address"
                            { ...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email address'
                                }
                            })}/>
                            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
                        <Button type="submit">Subscribe to Newsletter</Button>
                    </form> 
                    </div>
                    
            </div>
        </section>
        
    )
}

export default Subscription;