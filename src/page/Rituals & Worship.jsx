import React, { useState } from "react";
import Card from "../components/Card";
import { MythData } from "../DataMyth";

export default function Rituals_Worship() {
  const [myth, setMyth] = useState("ทั้งหมด");

  const filteredData =
    myth === "ทั้งหมด"
      ? MythData
      : MythData.filter((item) => item.tags.includes(myth));

  const categories = ["ทั้งหมด", "การไหว้พระ", "การบูชาเทพ", "ของไหว้"];

  return (
    <section className="container mx-auto  md:h-screen flex flex-col gap-8 mt-5 h-auto p-4">
      <h1 className="text-center text-2xl font-bold py-3 hover:underline">
        วิธีการไหว้และพิธีกรรม
      </h1>
      <div className="flex flex-row gap-4 justify-center items-center">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto  justify-items-center">
        {filteredData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
