import React from "react";
import Card from "../components/Card";
import { Datacontent } from "../DataContent";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./Contact us";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container mx-auto flex flex-col gap-8 mt-5 h-auto p-4 md:hidden">
        <Link to="/destinations">
          <h1 className="text-center text-2xl font-bold py-3 hover:underline cursor-pointer hover:text-sky-500">
            สถานที่ท่องเที่ยวเชิงศรัทธา <br />
            (สายมู) อุบลราชธานี
          </h1>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
          {Datacontent.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
      <div className="mt-10">
        <h1 className="text-center text-2xl md:text-4xl font-bold py-3  cursor-pointer ">
          สถานที่ท่องเที่ยวเชิงศรัทธา <br />
          (สายมู) อุบลราชธานี
        </h1>
      </div>
      {/* ลูปสร้าง Sections อัตโนมัติ */}
      {Datacontent.map((item, index) => (
        <section
          key={item.id}
          className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden"
        >
          {/* ถ้าดัชนีเป็นเลขคี่ => รูปอยู่ขวา ถ้าคู่ => รูปอยู่ซ้าย */}
          {index % 2 === 0 ? (
            <>
              {/* รูปภาพ */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* เนื้อหา */}
              <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
                <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
                  {item.title}
                </h1>
                <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  to={`/contenttample${item.id}`}
                  className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
                >
                  ดูเพิ่มเติม
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* เนื้อหา */}
              <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
                <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
                  {item.title}
                </h1>
                <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  to={`/contenttample${item.id}`}
                  className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
                >
                  ดูเพิ่มเติม
                </Link>
              </div>
              {/* รูปภาพ */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </>
          )}
        </section>
      ))}
      <About />
      <ContactUs />
    </>
  );
}
