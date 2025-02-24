import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './page/About.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Legends_Myth from './page/Legends & Myth.jsx'
import Contact_us from './page/Contact us.jsx'
import Destinations from './page/Destinations.jsx'
import Spiritual_blog from './page/Spiritual blog.jsx'
import Rituals_Worship from './page/Rituals & Worship.jsx'
import MainDes from './page/MainDes.jsx'
import ContentTample from './page/ContentTample.jsx'
import { LoadingProvider } from './contexts/LoadingContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoadingProvider>
        <MainLayout />
      </LoadingProvider>
    ),
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/destinations", element: <Destinations /> },
      { path: "/contact", element: <Contact_us /> },
      { path: "/myth", element: <Legends_Myth /> },
      { path: "/blog", element: <Spiritual_blog /> },
      { path: "/rituals", element: <Rituals_Worship /> },
      { path: "/maindes", element: <MainDes /> },
      { path: "/contenttample", element: <ContentTample /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

