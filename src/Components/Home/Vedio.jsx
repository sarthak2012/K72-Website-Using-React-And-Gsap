import React from "react";
import Vedioss from "../../../src/videos/homeVedio.mp4";

const Vedio = () => {
  return (
    <div className=" h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
        src={Vedioss}
      ></video>
    </div>
  );
};

export default Vedio;
