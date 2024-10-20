import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NewPage from './pages/NewPage/NewPage.jsx';
import About from './pages/About/About.jsx';
import Popular from './pages/Popular/Popular.jsx';
import Explore from './pages/Explore/Explore.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PopularPost from './components/PopularPost/PopularPost.jsx';
import Home from './pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/travel-blog-react",
    element: <App />,
    children: [
      { index: true, element: <Home /> },  // This makes Home the default page
      { path: "about", element: <About /> },
      { path: "popular", element: <Popular /> },
      { path: "popular/:index", element: <PopularPost /> },  // Dynamic route for PopularPost
      // { path: "home/:index", element: <PopularPost />},
      { path: "explore", element: <Explore /> },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
