import React from "react";
import img1 from "../Assets/1.jpg";

const Agence = () => {
  return (
    <div>
      <div className="section1">
        <div className="h-[20vw] w-[15vw] overflow-hidden rounded-4xl top-36 absolute left-[30vw] ">
          <img className=" object-cover h-full w-full" src={img1} alt="" />
        </div>

        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl leading-tight">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
