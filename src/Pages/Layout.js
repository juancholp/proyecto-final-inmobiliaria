import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import StoreProvider from "../Store/StoreProvider";
import Footer from "../Components/Footer"

const Layout = () => {
  
  const showNavBar = window.location.href.includes('dashboard')
  return (
    <>
    <StoreProvider  >
      {!showNavBar && <Navbar />}

      <Outlet />
      
      {!showNavBar && <Footer/>}
    </StoreProvider>
    </>
  );
};

export default Layout;
