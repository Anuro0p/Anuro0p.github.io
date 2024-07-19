import React from "react";
import ImageScroll from "./imageScroll";

const Hero = () => {
  return (
    <section className="flex  flex-col justify-center df-height px-20  df-text">
      <h1 className=" df-hero-title font-extrabold alegreya-title">
        Innovative
      </h1>
      <h1 className="df-hero-title font-extrabold  mb-8 alegreya-title">
        Software Solutions.
      </h1>
      <p className="text-xl  mb-8 alegreya-head 	">
        Crafting cutting-edge software solutions with a modern touch.
      </p>
      <div className="flex space-x-4">
        <button className="alegreya-head px-6 py-3 bg-teal-500 df-text font-light rounded-sm hover:bg-teal-400 transition">
          Explore My Work
        </button>
        <button className="alegreya-head px-6 py-3 border df-border df-text font-light rounded-sm hover:bg-gray-700 transition">
          Learn More
        </button>
      </div>
      <div className="hidden lg:block">
        <ImageScroll />
      </div>
    </section>
  );
};

export default Hero;
