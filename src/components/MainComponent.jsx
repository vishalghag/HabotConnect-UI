import React, { useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Content from "./Content";

const MainComponent = () => {
  useEffect(() => {
    document.title = "HabotConnect DMCC";
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Content />
    </div>
  );
};

export default MainComponent;
