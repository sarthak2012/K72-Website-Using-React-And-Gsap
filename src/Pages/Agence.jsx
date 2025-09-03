import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.jpg";
import img6 from "../Assets/6.jpg";
import img7 from "../Assets/7.jpg";
import img8 from "../Assets/8.jpg";
import img9 from "../Assets/9.jpg";
import img10 from "../Assets/10.jpg";
import img11 from "../Assets/11.jpg";
import img12 from "../Assets/12.jpg";
import img13 from "../Assets/13.jpg";
import img14 from "../Assets/14.jpg";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger); //image of person

  const imageDivRef = useRef(null);

  const imageRef = useRef(null); // for change of image

  //array of all the images that will be changed on scrolling
  const imageArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 0.7%",
        end: "bottom -190%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="text-white">
      <div className="section1  relative py-1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] overflow-hidden rounded-4xl top-36 absolute left-[30vw] "
        >
          <img
            ref={imageRef}
            className=" object-cover h-full w-full"
            src={img1}
            alt=""
          />
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

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
