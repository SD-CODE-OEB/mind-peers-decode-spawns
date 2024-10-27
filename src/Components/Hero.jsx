import React from "react";
import img from "../public/meditate-4882027_1920.jpg";
const Hero = () => {
  return (
    <div className="h-screen w-full" id="home">
      <div
        className="flex flex-col justify-center items-start space-y-8 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="text-4xl text-white font-bold mx-10">
          Face your problems to lead your Life!
        </h1>
        <button className="bg-green-800 p-5 rounded-lg m-10">
          Start a conversation
        </button>
      </div>
    </div>
  );
};
export default Hero;
