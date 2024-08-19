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
      { path: "explore", element: <Explore /> },
      // { path: "santorini-greece", element: <PopularPost title="Santorini, Greece" /> },
      // { path: "kyoto-japan", element: <PopularPost title="Kyoto, Japan" /> },
      // { path: "maui-hawaii", element: <PopularPost title="Maui, Hawaii" /> },
      // { path: "amalfi-coast-italy", element: <PopularPost title="Amalfi Coast, Italy" /> },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/travel-blog-react",
//     element: <App />,  // App is now the layout for all nested routes
//     children: [
//       { path: "home", element: <Home/> },
//       { path: "about", element: <About /> },
//       { path: "popular", element: <Popular /> },
//       { path: "explore", element: <Explore /> },
//       { path: "santorini-greece", element: <PopularPost title="Santorini, Greece" /> },
//       { path: "kyoto-japan", element: <PopularPost title="Kyoto, Japan" /> },
//       { path: "maui-hawaii", element: <PopularPost title="Maui, Hawaii" /> },
//       { path: "amalfi-coast-italy", element: <PopularPost title="Amalfi Coast, Italy" /> },
//     ],
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
