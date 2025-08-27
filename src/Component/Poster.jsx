import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/pencil6.jpeg";
import kaarigar1 from "./photos/Cinema.jpeg";
import kaarigar2 from "./photos/Cinema1.jpeg";
import kaarigar3 from "./photos/Cinema2.jpeg";
import Img4 from "./photos/Cinema3.jpeg";
import Img5 from "./photos/Cinema4.jpeg";
import Img6 from "./photos/Cinema5.jpeg";
import Img7 from "./photos/Cinema6.jpeg";
import Img8 from "./photos/Cinema7.jpeg";
import Img9 from "./photos/Cinema8.jpeg";

import Img11 from "./photos/Cinema10.jpeg";

import Img13 from "./photos/Cinema12.jpg";
import Img14 from "./photos/Cinema13.jpg";
import Img15 from "./photos/Cinema14.jpg";
import Img16 from "./photos/Cinema15.jpg";
import Img17 from "./photos/Cinema16.jpg";
import Img18 from "./photos/Cinema17.jpg";
import Img19 from "./photos/Cinema18.jpg";
import Img20 from "./photos/Cinema19.jpg";
import Img21 from "./photos/Cinema20.jpg";
import Img22 from "./photos/Cinema21.jpg";
import Img23 from "./photos/Cinema22.jpg";
import Img24 from "./photos/Cinema23.jpg";

import Img25 from "./photos/Cinema24.jpg";
import Img26 from "./photos/posters.jpg";




// import motor1 from "./photos/motor.png";
// import motor2 from "./photos/motor1.png";
// import motor3 from "./photos/moto2.png";
// import motor4 from "./photos/motor3.png";
// import motor5 from "./photos/motor4.png";
// import motor6 from "./photos/motor5.jpeg";
// import motor7 from "./photos/motor6.jpeg";
// import motor8 from "./photos/motor7.jpeg";
// import motor9 from "./photos/motor8.jpeg";
// import motor10 from "./photos/motor9.jpeg";
// import motor11 from "./photos/motor10.jpeg";

// import motor13 from "./photos/motor12.jpeg";


// import pencil1 from "./photos/pencil.jpeg";
// import pencil2 from "./photos/penci3.png";
// import pencil3 from "./photos/pencil.png";
// import pencil4 from "./photos/pencil2.jpeg";
// import pencil5 from "./photos/pencil4.jpeg";
// import pencil6 from "./photos/pencil44.png";
// import pencil7 from "./photos/pencil5.jpeg";
// import pencil8 from "./photos/pencil6.jpeg";
// import pencil9 from "./photos/pencil7.jpeg";
// import pencil10 from "./photos/pencil8.jpeg";
// import pencil11 from "./photos/pencil9.jpeg";
 


// import jua1 from "./photos/Jua.jpg";
// import jua2 from "./photos/jua2.png";

// import jua3 from "./photos/jua3.png";
// import jua4 from "./photos/jua4.png";
// import jua5 from "./photos/jua5.png";
// import jua6 from "./photos/jua6.png";
// import jua7 from "./photos/juapremi.png";
// import jua8 from "./photos/poker.jpeg";




// import madira1 from "./photos/madira1.png";
// import madira2 from "./photos/madira3.png";
// import madira3 from "./photos/madira2.png";
// import madira4 from "./photos/madira4.png";

// import madira5 from "./photos/madira5.png";

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

  {
    id: 25,
    title: "Twilight Reverie | Exclusive Paper",
    basePrice: 7399,
    image: Img25,
    link: "#",
  },
  {
    id: 26,
    title: "Golden Horizon | Limited Series",
    basePrice: 8599,
    image: Img26,
    link: "#",
  },

  // {
  //   id: 25,
  //   title: "Handcrafted Dreams | Original Artwork",
  //   basePrice: 7999,
  //   image: motor1,
  //   link: "#",
  // },
  // {
  //   id: 26,
  //   title: "Soulful Symphony | Canvas Masterpiece",
  //   basePrice: 6499,
  //   image: motor2,
  //   link: "#",
  // },
  // {
  //   id: 27,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //   image: motor3,
  //   link: "#",
  // },
  // {
  //   id: 28,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: motor4,
  //   link: "#",
  // },
  // {
  //   id: 29,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: motor5,
  //   link: "#",
  // },
  // {
  //   id: 30,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: motor6,
  //   link: "#",
  // },
  // {
  //   id: 31,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: motor7,
  //   link: "#",
  // },
  // {
  //   id: 32,
  //   title: "Crimson Threads | Canvas Abstract",
  //   basePrice: 7999,
  //   image: motor8,
  //   link: "#",
  // },
  // {
  //   id: 33,
  //   title: "Ethereal Touch | Fine Original",
  //   basePrice: 7499,
  //   image: motor9,
  //   link: "#",
  // },
  // {
  //   id: 34,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: motor10,
  //   link: "#",
  // },
  // {
  //   id: 36,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: motor11,
  //   link: "#",
  // },

  // {
  //   id: 37,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //       image: motor13,
  //   link: "#",
  // },
  // {
  //   id: 38,
  //   title: "Handcrafted Dreams | Original Artwork",
  //   basePrice: 7999,
  //   image: jua1,
  //   link: "#",
  // },
  // {
  //   id: 39,
  //   title: "Soulful Symphony | Canvas Masterpiece",
  //   basePrice: 6499,
  //   image: jua2,
  //   link: "#",
  // },
  // {
  //   id: 40,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //   image: pencil1,
  //   link: "#",
  // },
  // {
  //   id: 41,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //   image: pencil2,
  //   link: "#",
  // },
  // {
  //   id: 42,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //   image: pencil3,
  //   link: "#",
  // },
  // {
  //   id: 43,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil4,
  //   link: "#",
  // },
  // {
  //   id: 44,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: pencil5,
  //   link: "#",
  // },
  // {
  //   id: 45,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil6,
  //   link: "#",
  // },
  // {
  //   id: 46,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: pencil7,
  //   link: "#",
  // },
  // {
  //   id: 47,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil10,
  //   link: "#",
  // },
  // {
  //   id: 48,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: pencil11,
  //   link: "#",
  // },

  // {
  //   id: 49,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //       image: pencil8,
  //   link: "#",
  // },
  // {
  //   id: 50,
  //   title: "Handcrafted Dreams | Original Artwork",
  //   basePrice: 7999,
  //   image: pencil9,
  //   link: "#",
  // },
  // {
  //   id: 51,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil4,
  //   link: "#",
  // },
  // {
  //   id: 52,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: pencil5,
  //   link: "#",
  // },
  // {
  //   id: 53,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil6,
  //   link: "#",
  // },
  // {
  //   id: 54,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil4,
  //   link: "#",
  // },
  // {
  //   id: 55      ,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: pencil5,
  //   link: "#",
  // },
  // {
  //   id: 56,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: pencil6,
  //   link: "#",
  // },



  // {
  //   id: 57,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: jua3,
  //   link: "#",
  // },
  // {
  //   id: 58,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: jua4,
  //   link: "#",
  // },
  // {
  //   id: 59,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: jua5,
  //   link: "#",
  // },
  // {
  //   id: 60,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: jua6,
  //   link: "#",
  // },
  // {
  //   id: 61,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: jua7,
  //   link: "#",
  // },
  // {
  //   id: 62  ,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: jua8,
  //   link: "#",
  // },





  // {
  //   id: 63,
  //   title: "Handcrafted Dreams | Original Artwork",
  //   basePrice: 7999,
  //   image: madira1,
  //   link: "#",
  // },
  // {
  //   id: 64,
  //   title: "Soulful Symphony | Canvas Masterpiece",
  //   basePrice: 6499,
  //   image: madira2,
  //   link: "#",
  // },
  // {
  //   id: 65,
  //   title: "Mystic Reflections | Paper Original",
  //   basePrice: 7299,
  //   image: madira3,
  //   link: "#",
  // },
  // {
  //   id: 66,
  //   title: "Twilight Reverie | Exclusive Paper",
  //   basePrice: 7399,
  //   image: madira4,
  //   link: "#",
  // },
  // {
  //         id: 67,
  //   title: "Golden Horizon | Limited Series",
  //   basePrice: 8599,
  //   image: madira5,
  //   link: "#",
  // },





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
          Poster
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







