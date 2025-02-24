import React from "react";
import Card from "../components/Card";
import { CardList } from "../DataCardList";

export default function Legends_Myth() {
  return (
    <section className="container mx-auto flex flex-col gap-8 mt-5 h-auto p-4 ">
      <h1 className="text-center text-2xl font-bold py-3 hover:underline">
        ตำนานและความเชื่อ
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href=""
          className="hover:underline shadow-md rounded-lg px-3 py-2 hover:bg-gray-400 cursor-pointer"
        >
          ทั้งหมด
        </a>
        <a
          href=""
          className="hover:underline shadow-md rounded-lg px-3 py-2 hover:bg-gray-400 cursor-pointer"
        >
          ตำนานวัด
        </a>
        <a
          href=""
          className="hover:underline shadow-md rounded-lg px-3 py-2 hover:bg-gray-400 cursor-pointer"
        >
          ตำนานเทพเจ้า
        </a>
        <a
          href=""
          className="hover:underline shadow-md rounded-lg px-3 py-2 hover:bg-gray-400 cursor-pointer"
        >
          เรื่องเล่าสายมู
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
        {CardList.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
