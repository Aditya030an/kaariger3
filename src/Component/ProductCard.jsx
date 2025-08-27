import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

const pricingPerInch = {
  frame: 45,
  print: 10,
  canvas: 20,
  paper: 15,
};

const ProductCart = ({ product, onClose, onAddToCart }) => {
  const productName = product?.title?.split(" | ")[0] || "Product";
  const [artType, setArtType] = useState("frame");
  const [price, setPrice] = useState(0);
  const [media, setMedia] = useState("canvas");
  const [selectedFrame, setSelectedFrame] = useState("Matte Black");
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");

  const frames = [
    { name: "Matte Black", color: "bg-black", borderColor: "#000000" },
    { name: "White", color: "bg-white border", borderColor: "#ffffff" },
    { name: "Cream", color: "bg-[#f5f5f5] border", borderColor: "#f5f5f5" },
    { name: "Oak", color: "bg-yellow-700", borderColor: "#b45309" },
    { name: "Walnut", color: "bg-amber-950", borderColor: "#451a03" },
  ];

  useEffect(() => {
    if (customWidth && customHeight) {
      const width = parseFloat(customWidth);
      const height = parseFloat(customHeight);
      const area = width * height;
      const rate = pricingPerInch[artType] + pricingPerInch[media];
      setPrice(area * rate);
    } else {
      setPrice(0);
    }
  }, [artType, media, customWidth, customHeight]);

  const handleAdd = () => {
    if (!customWidth || !customHeight) return;

    const width = parseFloat(customWidth);
    const height = parseFloat(customHeight);

    const cartItem = {
      ...product,
      width,
      height,
      artType,
      media,
      selectedFrame,
      price,
      isCustomSize: true,
    };
    onAddToCart(cartItem);
    onClose();
  };

  // Frame styling
  const getFrameBorderColor = () => {
    const frame = frames.find((f) => f.name === selectedFrame);
    return frame ? frame.borderColor : "#000000";
  };

  const getFrameWidth = () => {
    return artType === "frame" ? "20px" : "0px";
  };

  return (
    <div className="fixed inset-0 z-50 bg-white w-screen h-screen overflow-y-auto">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-2 flex flex-col gap-4">
        <button
          onClick={onClose}
          className="text-[22px] font-medium text-black flex items-center gap-1"
        >
          <IoArrowBack size={18} /> Back
        </button>

        <h4 className="text-[18px] text-gray-600 font-mono font-light text-center">
          Art Paint Decor Object Mixed Media Art Gallery Walls Custom Framing
        </h4>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="relative bg-gray-100 rounded-md w-full flex items-center justify-center p-4">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-[250px] h-[250px] sm:w-full sm:h-[400px] object-cover"
                style={{
                  border: `${getFrameWidth()} solid ${getFrameBorderColor()}`,
                  borderRadius: artType === "frame" ? "4px" : "0px",
                  boxShadow:
                    artType === "frame"
                      ? "0 4px 12px rgba(0,0,0,0.15)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              />
            </div>

            <h2 className="text-2xl font-serif font-bold text-center">
              {productName}
            </h2>

            <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 px-2">
              <div className="flex flex-col gap-1 text-base">
                <span className="font-semibold">Best Price:</span>
                <p>
                  ₹
                  {product?.bestPrice?.toLocaleString() ||
                    product?.basePrice?.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col gap-1 text-base">
                <span className="font-semibold">
                  Price After Size Selection:
                </span>
                <p>₹{price?.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Frame or Print */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">
                Choose Framed or Print
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() => setArtType("frame")}
                  className={`border px-4 py-3 w-full rounded font-medium ${
                    artType === "frame" ? "bg-zinc-700 text-white" : "bg-white"
                  }`}
                >
                  Framed Art
                </button>
                <button
                  onClick={() => setArtType("print")}
                  className={`border px-4 py-3 w-full rounded font-medium ${
                    artType === "print" ? "bg-zinc-700 text-white" : "bg-white"
                  }`}
                >
                  Print
                </button>
              </div>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">
                Choose a Media
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() => setMedia("canvas")}
                  className={`border px-4 py-3 w-full rounded font-medium ${
                    media === "canvas" ? "bg-zinc-700 text-white" : "bg-white"
                  }`}
                >
                  Canvas
                </button>
                <button
                  onClick={() => setMedia("paper")}
                  className={`border px-4 py-3 w-full rounded font-medium ${
                    media === "paper" ? "bg-zinc-700 text-white" : "bg-white"
                  }`}
                >
                  Paper
                </button>
              </div>
            </div>

            {/* Frame Style */}
            <div>
              <h3 className="text-xl font-serif font-bold">Frame Style</h3>
              <p className="text-sm text-gray-500 mb-2">
                Selected Frame: {selectedFrame}
              </p>
              <div className="flex gap-3 flex-wrap">
                {frames.map((frame) => (
                  <button
                    key={frame.name}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${
                      frame.color
                    } ${
                      selectedFrame === frame.name ? "ring-2 ring-black" : ""
                    }`}
                    onClick={() => setSelectedFrame(frame.name)}
                    title={frame.name}
                  />
                ))}
              </div>
            </div>

            {/* Custom Size Only */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">
                Enter Custom Size (Inches)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Width
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.01"
                    value={customWidth}
                     placeholder="12.00"
                    onChange={(e) => setCustomWidth(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Height
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.01"
                    value={customHeight}
                     placeholder="15.00"
                    onChange={(e) => setCustomHeight(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>

              {customWidth && customHeight && (
                <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                  <p>
                    <b>Custom Size:</b> {customWidth} × {customHeight} inches
                  </p>
                  <p>
                    <b>Area:</b>{" "}
                    {(
                      parseFloat(customWidth) * parseFloat(customHeight)
                    ).toFixed(2)}{" "}
                    sq inches
                  </p>
                </div>
              )}
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              disabled={!customWidth || !customHeight}
              className="w-full bg-zinc-700 text-white py-3 rounded hover:bg-zinc-800 disabled:bg-gray-300"
            >
              {!customWidth || !customHeight
                ? "Please enter custom dimensions"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
