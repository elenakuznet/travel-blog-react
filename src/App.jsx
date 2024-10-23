import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Subscription from './components/Subscription/Subscription';

function App() {
  return (
    
    <div className="app">
      <div className='container'>
        <Header />
          <Outlet/>
          <Subscription/>
        
      </div>
      <Footer />
    </div>
    
  );
}

export default App;