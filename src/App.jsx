import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Subscription from './components/Subscription/Subscription';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    
    <div className="app">
      <ScrollToTop/>
      <Header />
        <div className='container'>
          <Outlet/>
          <Subscription/>
        </div>
      <Footer />
    </div>
    
  );
}

export default App;