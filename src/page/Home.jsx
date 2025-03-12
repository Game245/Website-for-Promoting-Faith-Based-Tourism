import React from "react";
import Card from "../components/Card";
import { Datacontent } from "../DataContent";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container mx-auto flex flex-col gap-8 mt-5 h-auto p-4 md:hidden">
        <Link to="/destinations">
          <h1 className="text-center text-2xl font-bold py-3 hover:underline cursor-pointer hover:text-sky-500">
            สถานที่ท่องเที่ยวเชิงศรัทธา <br/>(สายมู) อุบลราชธานี
          </h1>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
          {Datacontent.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
      {/* 1 */}
      <section className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden  ">
        {/* รูปภาพ */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Datacontent[0].img}
            alt={Datacontent[0].title}
            className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* เนื้อหา */}
        <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
          <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
            {Datacontent[0].title}
          </h1>
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed ">
            {Datacontent[0].description}
          </p>
          <Link
            to={`/contenttample${Datacontent[0].id}`}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
      </section>
      {/* 2 */}
      <section className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden">
        {/* เนื้อหา */}
        <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
          <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
            {Datacontent[1].title}
          </h1>
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed ">
            {Datacontent[1].description}
          </p>
          <Link
            to={`/contenttample${Datacontent[1].id}`}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
        {/* รูปภาพ */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Datacontent[1].img}
            alt={Datacontent[1].title}
            className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* 3 */}
      <section className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden">
        {/* รูปภาพ */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Datacontent[2].img}
            alt={Datacontent[2].title}
            className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* เนื้อหา */}
        <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
          <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
            {Datacontent[2].title}
          </h1>
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed ">
            {Datacontent[2].description}
          </p>
          <Link
            to={`/contenttample${Datacontent[2].id}`}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
      </section>
      {/* 4 */}
      <section className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden">
        {/* เนื้อหา */}
        <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
          <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
            {Datacontent[3].title}
          </h1>
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed ">
            {Datacontent[3].description}
          </p>
          <Link
            to={`/contenttample${Datacontent[3].id}`}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
        {/* รูปภาพ */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Datacontent[3].img}
            alt={Datacontent[3].title}
            className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* 5 */}
      <section className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden">
        {/* รูปภาพ */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Datacontent[4].img}
            alt={Datacontent[4].title}
            className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* เนื้อหา */}
        <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
          <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
            {Datacontent[4].title}
          </h1>
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed ">
            {Datacontent[4].description}
          </p>
          <Link
            to={`/contenttample${Datacontent[4].id}`}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
      </section>
      {/* 6 */}
      <section className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden">
        {/* เนื้อหา */}
        <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
          <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
            {Datacontent[5].title}
          </h1>
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed ">
            {Datacontent[5].description}
          </p>
          <Link
            to={`/contenttample${Datacontent[5].id}`}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
          >
            ดูเพิ่มเติม
          </Link>
        </div>
        {/* รูปภาพ */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Datacontent[5].img}
            alt={Datacontent[5].title}
            className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
