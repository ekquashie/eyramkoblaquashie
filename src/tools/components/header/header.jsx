import React from "react";
import {SlArrowDown} from "react-icons/sl";
import falcon9 from "../../../assets/falcon9.png";

const Header = () => {
  return (
    <section className="relative flex justify-center items-center h-screen rounded-md">
      <div className="flex pl-20 items-center h-full w-7/12 text-white bg-black">
        <div className="animate-fadeIn">
          <h1 className="text-9xl font-source font-bold animate-slideLeft">Motion
            <br/>Is <br/>Immersive
          </h1>
        </div>
        <button></button>
      </div>
      <div className="flex justify-center items-center w-5/12 h-full bg-hero-background bg-cover bg-no-repeat">
        <img src={falcon9} height={800} width={50} className="animate-bounce1" alt="falcon 9"/>
      </div>
      <SlArrowDown className="absolute text-white w-8 h-8 animate-bounce opacity-50 bottom-4"/>
    </section>
  );
}

export default Header;