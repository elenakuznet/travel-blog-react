import { useForm } from "react-hook-form";
import './Subscription.css';
import Button from "../shared/Button/Button";

const Subscription = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Email submitted:', data.email);
        alert('Thank you for subscribing!');
    }

    return (
        <section className="section">
            <div className="subscription">
                <div className="subscription__image">
                <img src="/travel-blog-react/img/subscription.jpg" className="subscription__img" alt="Emily traveling" />
                </div>
                
                <div className="subscription__content">
                    <h2 className="subscription__title">Subscribe to Newsletter</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            className="input-email"
                            type="email"
                            placeholder="Enter your email" 
                            { ...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email address'
                                }
                            })}/>
                            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
                        {/* <button type="submit">Send</button> */}
                        <Button type="submit">Subscribe to Newsletter</Button>
                    </form> 
                    </div>
                    
            </div>
        </section>
        
    )
}

export default Subscription;