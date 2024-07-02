import React, { useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";

const MainComponent = () => {
  useEffect(() => {
    document.title = "HabotConnect DMCC";
  }, []);
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default MainComponent;
