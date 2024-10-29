// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import NewPage from './pages/NewPage/NewPage.jsx';
// import About from './pages/About/About.jsx';
// import Popular from './pages/Popular/Popular.jsx';
// import Explore from './pages/Explore/Explore.jsx';
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import PopularPost from './components/PopularPost/PopularPost.jsx';
// import Home from './pages/Home/Home.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/travel-blog-react",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },  // This makes Home the default page
//       { path: "about", element: <About /> },
//       { path: "popular", element: <Popular /> },
//       { path: "popular/:index", element: <PopularPost /> },  // Dynamic route for PopularPost
//       { path: "home/:index", element: <PopularPost />},
//       { path: "explore", element: <Explore /> },
//     ],
//   },
// ]);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';

// Lazy load the pages
const Home = React.lazy(() => import('./pages/Home/Home.jsx'));
const About = React.lazy(() => import('./pages/About/About.jsx'));
const Popular = React.lazy(() => import('./pages/Popular/Popular.jsx'));
const Explore = React.lazy(() => import('./pages/Explore/Explore.jsx'));
const PopularPost = React.lazy(() => import('./components/PopularPost/PopularPost.jsx'));

// Setup router with lazy-loaded components
const router = createBrowserRouter([
  {
    path: "/travel-blog-react",
    element: <App />,
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
          <Suspense fallback={<Loader message="Loading posts..." />}>
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

