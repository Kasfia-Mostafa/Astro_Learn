import React from "react";
import Navbar from "../../Header/NAvbar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-cornsilk font-oxanium">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
