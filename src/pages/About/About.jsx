import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>About Me</h1>
        <p>Hi! I'm Emily, a wanderlust-driven girl with a passion for storytelling.</p>
      </div>
      
      <div className="about__content">
        <div className="about__image">
          <img src="/travel-blog-react/img/about/about-emily.jpg" alt="Emily traveling" />
        </div>
        
        <div className="about__text">
          <h2>My Journey</h2>
          <p>
            Ever since I was a little girl, I dreamed of exploring the world. My heart beats faster at the thought of stepping into unknown lands, tasting new foods, and immersing myself in different cultures. Through this blog, I want to share those experiences with you—my stories, my adventures, and my view of the world.
          </p>
          <p>
            I believe that travel is not just about visiting places; it's about experiencing life in its purest form. The connections we make, the moments of awe, and even the challenges we face on the road—all of these shape who we are.
          </p>

          <h2>Why I Started This Blog</h2>
          <p>
            I started this blog to document my journey, not just for myself, but for anyone who shares the same love for adventure. Whether you're planning your next trip or simply looking for some inspiration, I hope my stories resonate with you.
          </p>
          <p>
            I'm always chasing that next horizon, and I invite you to join me on this never-ending journey. Let's explore the world together, one story at a time.
          </p>

          <p>
            Feel free to reach out—I love connecting with fellow travelers and dreamers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;