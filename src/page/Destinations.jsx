import React, { useState } from "react";
import Card from "../components/Card";
import { Datacontent } from "../DataContent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function Destinations() {
  const [myth, setMyth] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");

  // กรองตามหมวดหมู่ก่อน
  const filteredData =
    myth === "ทั้งหมด"
      ? Datacontent
      : Datacontent.filter((item) => item.tagsdestinations?.includes(myth));

  // กรองตามชื่อวัด
  const searchFilteredData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [
    "ทั้งหมด",
    "ความรัก",
    "การงาน",
    "เงินทอง",
    "การเรียน",
    "สุขภาพ",
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3 text-gray-600">
        <nav className="flex items-center gap-2 md:text-sm text-[12px]">
          <Link to="/" className="flex items-center gap-1 text-blue-500 font-medium hover:underline hover:text-blue-300">
            <FaHome /> หน้าแรก
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">สถานที่ท่องเที่ยวเชิงศรัทธา (สายมู) อุบลราชธานี</span>
        </nav>
      </div>

      <section className="container mx-auto flex flex-col gap-8 mt-5 p-4">
        <h1 className="text-center text-2xl font-bold py-3 hover:underline">
          สถานที่ท่องเที่ยวเชิงศรัทธา (สายมู) อุบลราชธานี
        </h1>

        {/* 🔍 กล่องค้นหา */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="🔍 ค้นหาชื่อวัด..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded-lg w-full md:w-1/2 shadow-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* ปุ่มกรองหมวดหมู่ */}
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          {categories.map((category) => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              key={category}
              onClick={() => setMyth(category)}
              className={`shadow-md rounded-lg px-4 py-2 cursor-pointer transition-all text-sm transform 
              ${
                myth === category
                  ? "bg-gray-600 text-white scale-105"
                  : "hover:bg-gray-400 bg-gray-200 hover:scale-105"
              }`}
              style={{ transition: "transform 0.3s ease-in-out" }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* รายการวัดที่ค้นหา & กรอง */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full h-auto justify-items-center mt-6">
          {searchFilteredData.length > 0 ? (
            searchFilteredData.map((item) => (
              <Link key={item.id} to={`/contenttample${item.id}`} className="w-full">
                <Card {...item} />
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center h-96 w-full col-span-3">
              <p className="text-center text-gray-500 text-lg">❌ ไม่พบข้อมูล</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
