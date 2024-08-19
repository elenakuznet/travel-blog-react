import BucketList from '../../components/BucketList/BucketList';
import './NewPage.css';


function NewPage() {
  return (
    <div>
        <h2 class="post__title section__title">Kaş</h2>
        <BucketList/>

        <img src="/travel-blog-react/img/kas/kas-photo-7.jpg" alt="" className="post__data-img" />
        <p class="post__description">
                All the trips around the world are a great 
                pleasure and happiness for anyone, enjoy 
                the sights when you travel the world. Travel 
                safely and without worries, get your trip and 
                explore the paradises of the world.
        </p>

        <p class="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aspernatur natus enim molestias. Velit dolorem possimus praesentium, non explicabo quia, culpa deleniti at, expedita sed tempora dolore nesciunt eveniet mollitia qui. Incidunt dicta porro in omnis unde? Ipsum ducimus quod magnam?</p>
        

        <div class="post__row">
            <img src="/travel-blog-react/img/kas/kas-photo-4.jpg" alt="" className="post__data-img" />
            <p class="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus enim molestias. Velit dolorem possimus praesentium, non explicabo quia, culpa deleniti at, expedita sed tempora dolore nesciunt eveniet mollitia qui. Incidunt dicta porro in omnis unde? Ipsum ducimus quod magnam?</p>
        </div>

        <p class="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aspernatur natus enim molestias. Velit dolorem possimus praesentium, non explicabo quia, culpa deleniti at, expedita sed tempora dolore nesciunt eveniet mollitia qui. Incidunt dicta porro in omnis unde? Ipsum ducimus quod magnam?</p>
        <img src="/travel-blog-react/img/kas/kas-photo-6.jpg" alt="" className="post__data-img" />


    </div>
  );
}

export default NewPage;