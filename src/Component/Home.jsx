import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

import carsoul from "./photos/slide.png";
import carsoul1 from "./photos/slide6.png";
import carsoul2 from "./photos/slide2.png";
import carsoul3 from "./photos/slide4.png";
import carsoul4 from "./photos/slide3.jpeg";
import carsoul5 from "./photos/slide7.png";
import carsoul6 from "./photos/slide8.png";
import carsoul7 from "./photos/slidenew3.png";
import carsoul8 from "./photos/slidenew1.png";
import madira1 from "./photos/madira2.png";
import jua from "./photos/jua2.png";
import pencil from "./photos/pencil2.jpeg";
import cinema from "./photos/cinema.jpg";
import baklol from "./photos/baklol.png";
import bgImg from "./photos/madira2.png";
import brush from "./photos/paint.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Bestseller from "./Bestseller";
import Refresh from "./Refresh";
import About from "./About";
import USP from "./USP";
import lux from "./photos/luxe7.png";
import Cinema from "./photos/Cinema5.jpeg";
import Artifacts from "./photos/Artifact3.png";
const items = [ 
  {
    title: "Handmade Paintings",
    category: "Handmade Paintings",
    image: lux,
    link: "/Painting", // Update to actual route
  },
  {
    title: "Posters",
    category: "Posters",
    image: Cinema,
    link: "/Poster", // Update to actual route
  },
  {
    title: "Artifacts",
    category: "Artifacts",
    image: Artifacts,
    link: "/Artifacts", // Update to actual route
  },

];
const images = [
  carsoul7,
  carsoul8,
  carsoul,
  carsoul1,
  carsoul2,
  carsoul6,
  carsoul4,
  carsoul5,
  carsoul3,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const collections = [
    { title: "Madira Premi", image: madira1, link: "/Madira" },
    { title: "The Poker Parlour", image: jua, link: "/Juapremi" },
    { title: "Aesthetic premi", image: cinema, link: "/Aestheticspremi" },
    { title: "Pencil Poetry", image: pencil, link: "/Pencilpremi" },
    { title: "Baklol premi", image: baklol, link: "/Cinemapremi" },
    { title: "Burnout Boulevard", image: madira1, link: "/Gaadi" },
  ];

  return (
    <div className="relative cursor-none">
      {/* Brush Cursor - hidden on small screens */}
      <img
        src={brush}
        alt="brush"
        className="fixed w-10 h-10 z-[9999] pointer-events-none transition-transform duration-75 ease-linear hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Carousel */}
      {/* <div className="relative w-full h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-full md:w-full md:h-full flex-none"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div> */}



<div className="relative w-full h-[100vh] overflow-hidden bg-black">
  <div
    className="flex transition-transform duration-700 ease-in-out h-full"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((src, index) => (
      <div
        key={index}
        className="w-full h-full flex-none flex items-center justify-center"
      >
        <img
          src={src}
          alt={`slide-${index}`}
          className="max-w-full max-h-full object-contain transition-transform duration-700 ease-in-out"
        />
      </div>
    ))}
  </div>

  {/* Dots */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
          index === currentIndex ? "bg-white" : "bg-gray-500"
        }`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>



      <div className="px-6 py-20 bg-[#f9f4ec]">
      <h2 className="text-center text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight">

        <span className="text-gray-700 font-[Amita]"> – Watch You Looking For?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-white/70 shadow-xl backdrop-blur-md overflow-hidden group hover:shadow-2xl duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-contain bg-gray-100 transition-transform duration-500 group-hover:scale-105"
  />
</div>

            <div className="p-6">
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-mono px-3 py-1 rounded-full mb-4">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold font-serif text-gray-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>

              <Link to={item.link}>
  <motion.button
    whileTap={{ scale: 0.95 }}
    className="mt-6 inline-flex items-center gap-2 text-white bg-gray-800 px-5 py-2.5 rounded-full shadow hover:bg-black transition-colors"
  >
    Explore Piece <ArrowRight size={16} />
  </motion.button>
</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>














      {/* Art Gallery Section */}
      <div className="bg-[#fefefe] py-12 px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Amita] font-bold text-gray-800 mb-2">
            <span className="inline-block w-10 h-[1px] bg-black mr-3 align-middle" />
            Kaarigar Art Gallery
            <span className="inline-block w-10 h-[1px] bg-black ml-3 align-middle" />
          </h2>
          <p className="text-gray-600 font-[Amita] text-sm md:text-base">
            Explore Curated Intricate Art Styles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 sm:h-72 md:h-80 lg:h-96 object-contain"
                />
              </div>
              <h3 className="text-center font-[Amita] mt-4 text-base sm:text-lg font-semibold tracking-wide text-gray-800">
                {item.title}
              </h3>
              <div className="text-center mt-2">
                <a href={item?.link} className="inline-block">
                  <button className="group relative inline-flex items-center justify-center px-6 py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-full overflow-hidden transition-all duration-300 hover:text-white">
                    <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10">EXPLORE</span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <Bestseller />
      <Refresh />
      <About />
      <USP />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={32} className="animate-wavy" />
      </a>
    </div>
  );
};

export default Home;
