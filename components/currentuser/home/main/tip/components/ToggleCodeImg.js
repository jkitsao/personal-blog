import React, { useState, useEffect } from "react";
import TipEditor from "./Editor";
import { motion } from "framer-motion";
function ToggleCodeImg({ tip }) {
  const [isCodeOpen, setIsCodeOpen] = useState(true);
  const [isImageOpen, setisImageOpen] = useState(false);

  //functions to handle opening and closing code and image
  const handleShowCode = () => {
    setIsCodeOpen(true);
    setisImageOpen(false);
  };
  const handleShowImage = () => {
    setisImageOpen(true);
    setIsCodeOpen(false);
  };

  //   if (!tip?.code && !tip?.imageData) {
  //     setIsCodeOpen(false);
  //     setisImageOpen(false);
  //   }

  return (
    <div className="w-full p-3 h-full">
      <span>
        {!tip?.code && (
          <p className="text-xs text-red-700">* code is not available</p>
        )}
        {!tip?.imageData && (
          <p className="text-xs text-red-700">* image is not available</p>
        )}
      </span>
      <div className="flex my-2 lg:my-5 lg:px-10">
        <motion.button
          className={`w-1/2 text-sm  py-2 text-gray-300 rounded mx-1 transition duration-700 ease-in-out outline-none focus:outline-none  text-center  ${
            isCodeOpen
              ? " bg-green-700 border-b-4 font-semibold lg:py-3 border-yellow-500"
              : "bg-blue-700"
          }`}
          onClick={handleShowCode}
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {isCodeOpen ? "code" : "show code"}
        </motion.button>
        <motion.button
          className={`w-1/2 text-sm  py-2 text-gray-300 rounded mx-1 transition duration-500 ease-in-out outline-none focus:outline-none  text-center  ${
            isImageOpen
              ? " bg-green-700 border-b-4 lg:py-3 font-semibold border-yellow-500"
              : "bg-blue-700"
          }`}
          onClick={handleShowImage}
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {isImageOpen ? "image" : "show image"}
        </motion.button>
      </div>
      {(tip?.code && isCodeOpen) || !tip?.imageData ? (
        <motion.div
          className="sm:px-3 mx-auto w-full transition duration-400 ease-in-out"
          initial={{ x: -30, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <TipEditor tip={tip} />
        </motion.div>
      ) : (
        ""
      )}
      {(tip?.imageData && isImageOpen) || !tip?.code ? (
        <motion.div
          className="lg:px-3 lg:mx-auto w-full h-full lg:w-full transition duration-400 ease-in-out lg:h-xxl"
          initial={{ x: 30, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <img
            src={tip?.imageData?.secure_url}
            alt={tip?.title}
            className="w-full  object-cover lg:h-xxl"
          />
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ToggleCodeImg;
