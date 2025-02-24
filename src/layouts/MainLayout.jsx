import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { LoadingContext } from "../contexts/LoadingContext";
import Loading from "../components/Loading";

function MainLayout() {
  const { loading, setLoading } = useContext(LoadingContext);
  const location = useLocation(); 

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 15000); 

    return () => clearTimeout(timer); 
  }, [location.pathname]); 

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
