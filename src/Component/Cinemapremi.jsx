import React, { useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Cinema2.jpeg";
import kaarigar1 from "./photos/Cinema.jpeg";
import kaarigar2 from "./photos/Cinema1.jpeg";
import kaarigar3 from "./photos/Cinema2.jpeg";
import Img4 from "./photos/Cinema3.jpeg";
import Img5 from "./photos/Cinema4.jpeg";
import Img6 from "./photos/Cinema5.jpeg";
import Img7 from "./photos/Cinema6.jpeg";
import Img8 from "./photos/Cinema7.jpeg";
import Img9 from "./photos/Cinema8.jpeg";
import Img10 from "./photos/Cinema9.jpeg";
import Img11 from "./photos/Cinema10.jpeg";

import Img13 from "./photos/cinema12.jpg";
import Img14 from "./photos/cinema13.jpg";
import Img15 from "./photos/cinema14.jpg";
import Img16 from "./photos/cinema15.jpg";
import Img17 from "./photos/cinema16.jpg";
import Img18 from "./photos/cinema17.jpg";
import Img19 from "./photos/cinema18.jpg";
import Img20 from "./photos/cinema19.jpg";
import Img21 from "./photos/cinema20.jpg";
import Img22 from "./photos/cinema21.jpg";
import Img23 from "./photos/cinema22.jpg";
import Img24 from "./photos/cinema23.jpg";
import Img25 from "./photos/cinema24.jpg";


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
    title: "Handcrafted Dreams | Original Artwork",
    basePrice: 7999,
    image: kaarigar1,
    link: "#",
  },
  {
    id: 2,
    title: "Soulful Symphony | Canvas Masterpiece",
    basePrice: 6499,
    image: kaarigar2,
    link: "#",
  },
  {
    id: 3,
    title: "Mystic Reflections | Paper Original",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
  },
  {
    id: 4,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img4,
    link: "#",
  },
  {
    id: 5,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img5,
    link: "#",
  },
  {
    id: 6,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img6,
    link: "#",
  },
  {
    id: 7,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img7,
    link: "#",
  },
  {
    id: 8,
    title: "Crimson Threads | Canvas Abstract",
    basePrice: 7999,
    image: Img8,
    link: "#",
  },
  {
    id: 9,
    title: "Ethereal Touch | Fine Original",
    basePrice: 7499,
    image: Img9,
    link: "#",
  },
  {
    id: 10,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img10,
    link: "#",
  },
  {
    id: 11,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img11,
    link: "#",
  },

  {
    id: 13,
    title: "Mystic Reflections | Paper Original",
    basePrice: 7299,
    image: Img13,
    link: "#",
  },
  {
    id: 14,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img14,
    link: "#",
  },
  {
    id: 15,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img15,
    link: "#",
  },
  {
    id: 16,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img16,
    link: "#",
  },
  {
    id: 17,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img17,
    link: "#",
  },
  {
    id: 18,
    title: "Crimson Threads | Canvas Abstract",
    basePrice: 7999,
    image: Img18,
    link: "#",
  },
  {
    id: 19,
    title: "Ethereal Touch | Fine Original",
    basePrice: 7499,
    image: Img19,
    link: "#",
  },
  {
    id: 20,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img20,
    link: "#",
  },
  {
    id: 21,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img21,
    link: "#",
  },
  {
    id: 22,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img22,
    link: "#",
  },
  {
    id: 23,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img23,
    link: "#",
  },
  {
    id: 24,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img24,
    link: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Cinemapremi = ({ cart, setCart }) => {
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
          Cinema Premi
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

export default Cinemapremi;
