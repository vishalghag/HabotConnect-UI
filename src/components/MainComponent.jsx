import React, { useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Content from "./Content";
import Footer from "./Footer";

const MainComponent = () => {
  useEffect(() => {
    document.title = "HabotConnect DMCC";
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default MainComponent;
