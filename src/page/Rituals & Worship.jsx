import React, { useState } from "react";
import Card from "../components/Card";
import { Datacontent } from "../DataContent";
import { Link } from "react-router-dom";

export default function Rituals_Worship() {
  const [myth, setMyth] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");

  const filteredData =
    myth === "ทั้งหมด"
      ? Datacontent
      : Datacontent.filter((item) => item.tagsrituals?.includes(myth));

  const searchFilteredData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["ทั้งหมด", "การไหว้พระ", "การบูชาเทพ", "สิ่งศักดิ์สิทธิ"];

  return (
    <section className="container mx-auto flex flex-col gap-8 mt-5 p-4">
      <h1 className="text-center text-2xl font-bold py-3 hover:underline">
        วิธีการไหว้และพิธีกรรม
      </h1>

      {/* 🔍 กล่องค้นหา */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="🔍 ค้นหาชื่อวัด..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-lg w-full md:w-1/2 shadow-md"
        />
      </div>

      {/* ปุ่มกรองหมวดหมู่ */}
      <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setMyth(category)}
            className={`shadow-md rounded-lg px-3 py-2 cursor-pointer transition-all text-[12px] 
              ${
                myth === category
                  ? "bg-gray-600 text-white"
                  : "hover:bg-gray-400 bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* รายการวัดที่ค้นหา & กรอง */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full h-auto justify-items-center mt-6">
        {searchFilteredData.length > 0 ? (
          searchFilteredData.map((item) => (
            <Link key={item.id} to={`/rituals${item.id}`}>
              <Card {...item} />
            </Link>
          ))
        ) : (
          <div className="flex justify-center items-center h-96 w-full col-span-3">
            <p className="text-center text-gray-500">❌ ไม่พบข้อมูล</p>
          </div>
        )}
      </div>
    </section>
  );
}
