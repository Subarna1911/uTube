import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SideIcons from "../components/SideIcons";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const location = useLocation();

  const showSideIcons = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <div>
      <Header />
      <div>
        <Sidebar />

        <div className="min-h-screen max-w-screen">
            <div className="container mx-auto">
                <main className="grid grid-cols-12 ">
                  {showSideIcons &&
                <div className="col-span-2">
                    <SideIcons/>
                </div>
              }
            <div className={ showSideIcons ? "col-span-10" : "col-span-12"}>
                <Outlet />
            </div>
            
                </main>
           </div>
        </div>
       
        
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
