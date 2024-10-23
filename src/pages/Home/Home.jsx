
import InteractiveMap from "../../components/InteractiveMap/InteractiveMap";
import './Home.css';
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import Subscription from "../../components/Subscription/Subscription";
import Posts from "../../components/Posts/Posts";



function Home() {

  return (
    <div>
      
      <BackgroundSlider/>

      <Posts></Posts>
      
      {/* <InteractiveMap /> */}
      {/* <Subscription/> */}
    </div>
  );
}

export default Home;