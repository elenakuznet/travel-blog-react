
import InteractiveMap from "../../components/InteractiveMap/InteractiveMap";
import './Home.css';
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import Subscription from "../../components/Subscription/Subscription";
import Posts from "../../components/Posts/Posts";
import TelegramSubscription from "../../components/TelegramSubscription/TelegramSubscription";



function Home() {

  return (
    <div>
      
      <BackgroundSlider/>
      <TelegramSubscription/>

      <Posts></Posts>
      
      {/* <InteractiveMap /> */}
      {/* <Subscription/> */}
    </div>
  );
}

export default Home;