import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./page/About.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Legends_Myth from "./page/Legends & Myth.jsx";
import Contact_us from "./page/Contact us.jsx";
import Destinations from "./page/Destinations.jsx";
import Spiritual_blog from "./page/Spiritual blog.jsx";
import Rituals_Worship from "./page/Rituals & Worship.jsx";
import MainDes from "./page/MainDes.jsx";
import ContentTample1 from "./page/ContentTample/ContentTample1.jsx";
import ContentTample2 from "./page/ContentTample/ContentTample2.jsx";
import ContentTample3 from "./page/ContentTample/ContentTample3.jsx";
import ContentTample4 from "./page/ContentTample/ContentTample4.jsx";
import ContentTample5 from "./page/ContentTample/ContentTample5.jsx";
import ContentTample6 from "./page/ContentTample/ContentTample6.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
import Rituals1 from "./page/Rituals/Rituals1.jsx";
import Rituals2 from "./page/Rituals/Rituals2.jsx";
import Rituals3 from "./page/Rituals/Rituals3.jsx";
import Rituals4 from "./page/Rituals/Rituals4.jsx";
import Rituals5 from "./page/Rituals/Rituals5.jsx";
import Rituals6 from "./page/Rituals/Rituals6.jsx";
import Myth1 from "./page/Myth/Myth1.jsx";
import Myth2 from "./page/Myth/Myth2.jsx";
import Myth3 from "./page/Myth/Myth3.jsx";
import Myth4 from "./page/Myth/Myth4.jsx";
import Myth5 from "./page/Myth/Myth5.jsx";
import Myth6 from "./page/Myth/Myth6.jsx";

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
      { path: "/contenttample1", element: <ContentTample1 /> },
      { path: "/contenttample2", element: <ContentTample2 /> },
      { path: "/contenttample3", element: <ContentTample3 /> },
      { path: "/contenttample4", element: <ContentTample4 /> },
      { path: "/contenttample5", element: <ContentTample5 /> },
      { path: "/contenttample6", element: <ContentTample6 /> },
      { path: "/rituals1", element: <Rituals1 /> },
      { path: "/rituals2", element: <Rituals2 /> },
      { path: "/rituals3", element: <Rituals3 /> },
      { path: "/rituals4", element: <Rituals4 /> },
      { path: "/rituals5", element: <Rituals5 /> },
      { path: "/rituals6", element: <Rituals6 /> },
      { path: "/myth1", element: <Myth1 /> },
      { path: "/myth2", element: <Myth2 /> },
      { path: "/myth3", element: <Myth3 /> },
      { path: "/myth4", element: <Myth4 /> },
      { path: "/myth5", element: <Myth5 /> },
      { path: "/myth6", element: <Myth6 /> },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

