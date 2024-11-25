import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import Error from './pages/Error/Error.jsx';

// Lazy load the pages
const Home = React.lazy(() => import('./pages/Home/Home.jsx'));
const About = React.lazy(() => import('./pages/About/About.jsx'));
const Popular = React.lazy(() => import('./pages/Popular/Popular.jsx'));
const Explore = React.lazy(() => import('./pages/Explore/Explore.jsx'));
const PopularPost = React.lazy(() => import('./components/post/PopularPost/PopularPost.jsx'));

// Setup router with lazy-loaded components
const router = createBrowserRouter([
  {
    path: "/travel-blog-react",
    element: <App />,
    errorElement: <Error />,
    children: [
      { 
        index: true, 
        element: (
          <Suspense fallback={<Loader message="Loading Home..." />}>
            <Home />
          </Suspense>
        ) 
      },  
      { 
        path: "about", 
        element: (
          <Suspense fallback={<Loader message="Loading About..." />}>
            <About />
          </Suspense>
        ) 
      },
      { 
        path: "popular", 
        element: (
          <Suspense fallback={<Loader message="Loading Popular..." />}>
            <Popular />
          </Suspense>
        ) 
      },
      { 
        path: "popular/:index", 
        element: (
          <Suspense fallback={<Loader message="Loading  Posts..." />}>
            <PopularPost />
          </Suspense>
        ) 
      },  
      { 
        path: "home/:index", 
        element: (
          <Suspense fallback={<Loader message="Loading post..." />}>
            <PopularPost />
          </Suspense>
        ) 
      },
      { 
        path: "explore", 
        element: (
          <Suspense fallback={<Loader message="Loading Explore..." />}>
            <Explore />
          </Suspense>
        ) 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

