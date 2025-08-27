import React from "react";
import Vedio from "./Vedio";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="  text-white text-[9.5vw] justify-center flex items-centeruppercase leading-[8vw]">
        L'étincelle
      </div>
      <div className="  text-white text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]">
        qui
        <div className="h-[7vw]  w-[16vw] -mt-3 rounded-full overflow-hidden">
          <Vedio />
        </div>
        génère
      </div>
      <div className="  text-white text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
