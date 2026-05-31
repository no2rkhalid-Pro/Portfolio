import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../src/components/pages/Footer";

export default function Root() {

  return (
    <>
      <Outlet />
      <Footer />     
    </>
  );
}
