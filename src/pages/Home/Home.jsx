
import InteractiveMap from "../../components/InteractiveMap/InteractiveMap";
import './Home.css';
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import Subscription from "../../components/Subscription/Subscription";
import Posts from "../../components/Posts/Posts";



function Home() {


  return (
    <div>
      
      <BackgroundSlider/>

      {/* <section>
        <h2>My recent adventures</h2>
        <div class="home__cards grid">
                  <article class="home__card">
                     <img src="/travel-blog-react/img/home-mountain.jpg" alt="home image" class="home__card-img"></img>
                     <h3 class="home__card-title">Croatia</h3>
                     <div class="home__card-shadow"></div>
                  </article>

                  <article class="home__card">
                     <img src="/travel-blog-react/img/home-trees.jpg" alt="home image" class="home__card-img"></img>
                     <h3 class="home__card-title">Iceland</h3>
                     <div class="home__card-shadow"></div>
                  </article>

                  <article class="home__card">
                     <img src="/travel-blog-react/img/home-lake.jpg" alt="home image" class="home__card-img"></img>
                     <h3 class="home__card-title">Italy</h3>
                     <div class="home__card-shadow"></div>
                  </article>

               </div>
      </section> */}

      <Posts></Posts>
      
      <InteractiveMap />
      {/* <Subscription/> */}
    </div>
  );
}

export default Home;