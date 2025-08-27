import React from "react";
import Vedio from "../Components/Home/Vedio";
import HomeHeroText from "../Components/Home/HomeHeroText";
import HomeBottomText from "../Components/Home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen  fixed">
        <Vedio />
      </div>

      <div className="h-screen w-screen relative overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
