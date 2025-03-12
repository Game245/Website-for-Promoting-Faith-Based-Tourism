import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import image1 from "../assets/images/วัดป่าใหญ่1_0.png";
import image2 from "../assets/images/วัดป่าใหญ่2_0.png";
import image3 from "../assets/images/วัดป่าใหญ่3_0.png";
import image4 from "../assets/images/วัดป่าใหญ่4_0.png";
import image5 from "../assets/images/วัดป่าใหญ่5_0.png";

export default function ImageSlider() {
  const images = [image1, image2, image3, image4, image5]; // ภาพที่ต้องการแสดงใน Slider

  const [currentIndex, setCurrentIndex] = useState(0); // index ของภาพที่แสดง

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // เปลี่ยนภาพทุก 3 วินาที

    return () => clearInterval(interval); // cleanup เมื่อ component หายไป
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        onError={(e) => e.target.src = '/path/to/fallback-image.png'} // fallback image
      />
      {/* ปุ่มถอยหลัง */}
      <div
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full"
      >
        <FaArrowAltCircleLeft className="text-white text-3xl" />
      </div>
      {/* ปุ่มไปข้างหน้า */}
      <div
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full"
      >
        <FaArrowAltCircleRight className="text-white text-3xl" />
      </div>
    </div>
  );
}
