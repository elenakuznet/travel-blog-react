import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className='section'>
        <div className={styles['about']}>
        <div className={styles['about__header']}>
          <h2 className={styles['about__title']}>About Me</h2>
        </div>
        
        <div className={styles['about__content']}>
          <div className={styles['about__image']}>
            <img src="/travel-blog-react/img/about/about.jpeg" className={styles['about__img']} alt="Elena traveling" />
          </div>
          
          <div className={styles['about__text']}>
            <p className={styles['about__description']}>Hi! I'm Elena, a wanderlust-driven girl with a passion for storytelling.</p>
            <h2 className={styles['about__subtitle']}>My Journey</h2>
            <p className={styles['about__description']}>
              Ever since I was a little girl, I dreamed of exploring the world. My heart beats faster at the thought of stepping into unknown lands, tasting new foods, and immersing myself in different cultures. Through this blog, I want to share those experiences with you—my stories, my adventures, and my view of the world.
            </p>
            <p className={styles['about__description']}>
              I believe that travel is not just about visiting places; it's about experiencing life in its purest form. The connections we make, the moments of awe, and even the challenges we face on the road—all of these shape who we are.
            </p>

            <h2 className={styles['about__description']}>Why I Started This Blog</h2>
            <p className={styles['about__description']}>
              I started this blog to document my journey, not just for myself, but for anyone who shares the same love for adventure. Whether you're planning your next trip or simply looking for some inspiration, I hope my stories resonate with you.
            </p>
            <p className={styles['about__description']}>
              I'm always chasing that next horizon, and I invite you to join me on this never-ending journey. Let's explore the world together, one story at a time.
            </p>

            <p className={styles['about__description']}>
              Feel free to reach out—I love connecting with fellow travelers and dreamers!
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;