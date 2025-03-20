import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import GrandfatherCha1 from "../assets/images/GrandfatherCha1.jpg";
import GrandfatherCha2 from "../assets/images/GrandfatherCha2.jpg";
import GrandfatherCha3 from "../assets/images/GrandfatherCha3.jpg";
import GrandfatherCha4 from "../assets/images/GrandfatherCha4.jpg";
import GrandfatherCha5 from "../assets/images/GrandfatherCha5.jpg";

// ✅ แก้ไขให้เป็นอาร์เรย์ของสตริง
const images = [
  GrandfatherCha1,
  GrandfatherCha2,
  GrandfatherCha3,
  GrandfatherCha4,
  GrandfatherCha5,
];

function Gallery8({}) {
  const [selectedImage, setSelectedImage] = useState(null);

  // ปิดภาพเมื่อกดปุ่ม Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-40 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 "
          onClick={() => setSelectedImage(null)} // ปิดเมื่อกดที่พื้นหลัง
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
            onClick={(e) => e.stopPropagation()} // ป้องกันคลิกปิดรูปเมื่อกดที่ภาพ
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-w-5xl rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={20} className="cursor-pointer" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Gallery8;
