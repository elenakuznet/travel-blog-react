import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Subscription from './components/Subscription/Subscription';

function App() {
  return (
    <div className="app">
      <Header />
        <Outlet/>
        <Subscription/>
      <Footer />
    </div>
  );
}

export default App;