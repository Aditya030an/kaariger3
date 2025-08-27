import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Artifacts2.jpg";

import Img1 from "./photos/Artifacts.jpg";
import Img3 from "./photos/Artifacts1.jpg";
import Img4 from "./photos/Artifacts2.jpg";
import Img5 from "./photos/Artifact3.png";
import Img6 from "./photos/Artifacts4.png";
import Img7 from "./photos/Artifacts5.png";
import Img8 from "./photos/Artifacts6.jpg";


import Img9 from "./photos/Artifacts7.jpg";
import Img10 from "./photos/Artifacts8.jpg";
import Img11 from "./photos/Artifacts9.jpg";
import Img12 from "./photos/Artifacts10.jpg";
import Img13 from "./photos/Artifacts11.jpg";
import Img14 from "./photos/Artifacts12.jpg";

import Img16 from "./photos/Artifacts14.jpg";
import Img17 from "./photos/Artifacts15.jpg";
import Img18 from "./photos/Artifacts16.jpg";
import ProductCart from "./ProductCard";

// TiltCard component
function TiltCard({ children }) {
  const tiltRef = React.useRef(null);

  React.useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        perspective: 1000,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="will-change-transform">
      {children}
    </div>
  );
}

const originals = [
    {
        id: 1,
        title: "Artifacts",
        image: Img1,
        basePrice: 1000,
        link: "/Artifacts",
    },                  

    {
        id: 3,
        title: "Artifacts",
        image: Img3,
        basePrice: 1000,
        link: "/Artifacts",
    }, 
    {
        id: 4,
        title: "Artifacts",
        image: Img4,
        basePrice: 1000,
        link: "/Artifacts",
    },
    {
        id: 5,
        title: "Artifacts",
        image: Img5,
        basePrice: 1000,
        link: "/Artifacts",
    },
    {
        id: 6,
        title: "Artifacts",
        image: Img6,
        basePrice: 1000,
        link: "/Artifacts",
    },
    {
        id: 7,
        title: "Artifacts",
        image: Img7,
        basePrice: 1000,
        link: "/Artifacts",
    },
    {
        id: 8,
        title: "Artifacts",
        image: Img8,
        basePrice: 1000,
        link: "/Artifacts",
    },

    {
      id: 9,
      title: "Artifacts",
      image: Img9,
      basePrice: 1000,
      link: "/Artifacts",
  },                  

  {
      id: 3,
      title: "Artifacts",
      image: Img10,
      basePrice: 1000,
      link: "/Artifacts",
  }, 
  {
      id: 4,
      title: "Artifacts",
      image: Img11,
      basePrice: 1000,
      link: "/Artifacts",
  },
  {
      id: 5,
      title: "Artifacts",
      image: Img12,
      basePrice: 1000,
      link: "/Artifacts",
  },
  {
      id: 6,
      title: "Artifacts",
      image: Img13,
      basePrice: 1000,
      link: "/Artifacts",
  },
  {
      id: 7,
      title: "Artifacts",
      image: Img14,
      basePrice: 1000,
      link: "/Artifacts",
  },

  {
    id: 6,
    title: "Artifacts",
    image: Img16,
    basePrice: 1000,
    link: "/Artifacts",
},
{
    id: 7,
    title: "Artifacts",
    image: Img17,
    basePrice: 1000,
    link: "/Artifacts",
},
{
    id: 8,
    title: "Artifacts",
    image: Img18,
    basePrice: 1000,
    link: "/Artifacts",
},







];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Painting = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    const existing = cart.find(
      (item) =>
        item.id === product?.id &&
        item.artType === product?.artType &&
        item.basePrice === product?.basePrice &&
        item.price === product?.price &&
        item.image === product?.image &&
        item.width === product?.width &&
        item.height === product?.height  &&
        item.media === product?.media &&
        item.selectedFrame === product?.selectedFrame
    );
    if (existing) {
      const updated = cart.map((item) =>
        item === existing ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <section className="relative overflow-hidden min-h-screen bg-white py-10 md:py-20 px-6 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-70 blur-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-gray-900 tracking-wider"
        >
          <span className="block w-20 h-1 mx-auto mb-3 md:mb-6 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-full"></span>
          Artifacts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6 font-[Amita] text-lg md:text-2xl font-light"
        >
          For the love of roaring engines, smokin tires and sheer power.
        </motion.p>
      </div>

      {/* Product Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
        {originals.map((product, index) => (
          <motion.div
            key={product?.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <TiltCard>
              <a
                onClick={() => setSelectedProduct(product)}
                href={product?.link}
                className="block bg-white shadow-lg border border-gray-200 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#38b2ac] transition-all duration-700 p-2 md:p-5"
              >
                <div className="relative overflow-hidden rounded-2xl h-48 md:h-72 flex items-center justify-center">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-[Amita] font-bold text-gray-800 mb-2">
                    {product?.title}
                  </h3>
                  <p className="text-teal-600 font-semibold text-lg">
                    ₹ {product?.basePrice}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Exclusive Originals
                  </p>
                </div>
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <motion.div
        className="relative z-10 w-4/5 mx-auto mt-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {/* Product Modal */}
      {selectedProduct && (
        <ProductCart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default Painting;







