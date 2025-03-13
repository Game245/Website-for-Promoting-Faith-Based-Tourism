import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { LoadingContext } from "../contexts/LoadingContext";
import Loading from "../components/Loading";

function MainLayout() {
    return(
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
