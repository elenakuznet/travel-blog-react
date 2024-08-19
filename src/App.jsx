import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostAdd from './components/PostAdd/PostAdd';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Footer from './components/Footer/Footer';
import PopularCard from './components/PopularCard/PopularCard';
import Section from './components/Section/Section';
import { Outlet } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));

    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date),
      })));
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);

  function addItem(item) {
    setItems(oldItems => [...oldItems, {
      title: item.title,
      post: item.post,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  }

  return (
    <div className="app">
      <Header />
      <Outlet/>

      {/* <Section title="Popular Destinations">
        <div className="popular">
          <PopularCard
            link="/travel-blog-react/new-page"
            imageSrc="/travel-blog-react/img/kas/kas-photo-5-small.jpg"
            title="Kaş"
            location="Türkiye"
          />
          <PopularCard
            link="/travel-blog-react/new-page"
            imageSrc="/travel-blog-react/img/kas/kas-photo-5-small.jpg"
            title="Kaş"
            location="Türkiye"
          />
          <PopularCard
            link="/travel-blog-react/new-page"
            imageSrc="/travel-blog-react/img/kas/kas-photo-5-small.jpg"
            title="Kaş"
            location="Türkiye"
          />
        </div>
      </Section> */}

      <Section title="Journal">
        <div className="journal">
          <LeftPanel>
            <PostAdd />
            <PostList items={items} />
          </LeftPanel>
          <Body>
            <PostForm onSubmit={addItem} />
          </Body>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;