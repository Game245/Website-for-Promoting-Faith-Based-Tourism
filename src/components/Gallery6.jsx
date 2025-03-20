import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import BanTamyae1 from "../assets/images/BanTamyae1.jpg";
import BanTamyae2 from "../assets/images/BanTamyae2.jpg";
import BanTamyae3 from "../assets/images/BanTamyae3.jpg";
import BanTamyae4 from "../assets/images/BanTamyae4.jpg";
import BanTamyae5 from "../assets/images/BanTamyae5.jpg";

// ✅ แก้ไขให้เป็นอาร์เรย์ของสตริง
const images = [
  BanTamyae1,
  BanTamyae2,
  BanTamyae3,
  BanTamyae4,
  BanTamyae5,
];

function Gallery6({}) {
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

export default Gallery6;
