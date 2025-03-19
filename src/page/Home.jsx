import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Datacontent } from "../DataContent";
import Header from "../components/Header";
import TravelMaps from "../components/Maps";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* ส่วน Header และ Maps */}
      <section>
        <Header />
        <div className="md:mt-25 mt-2 md:p-20 p-2 ">
          <TravelMaps />
        </div>
      </section>

      {/* ส่วนหัวเรื่อง */}
      <motion.section
        className="container mx-auto flex flex-col gap-8 h-auto p-4 md:hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/destinations">
          <motion.h1
            className="text-center text-2xl font-bold py-3 hover:underline cursor-pointer hover:text-sky-500"
            whileHover={{ scale: 1.1, color: "#0284c7" }}
          >
            สถานที่ท่องเที่ยวเชิงศรัทธา <br />
            (สายมู) อุบลราชธานี
          </motion.h1>
        </Link>

        {/* แสดง Card ของสถานที่ท่องเที่ยว */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
          {Datacontent.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
            >
              <Link
                to={`/contenttample${item.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card {...item} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ส่วนเนื้อหาใหญ่ */}
      <motion.section
        className="container mx-auto mt-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold py-3 hidden md:block">
          สถานที่ท่องเที่ยวเชิงศรัทธา <br />
          (สายมู) อุบลราชธานี
        </h1>
      </motion.section>

      {/* ลูปสร้าง Sections พร้อม Animation */}
      {Datacontent.map((item, index) => (
        <motion.section
          key={item.id}
          className="container mx-auto p-4 md:h-screen h-auto md:grid md:grid-cols-2 items-center gap-12 hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {index % 2 === 0 ? (
            <>
              {/* ภาพซ้าย */}
              <motion.div
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[280px] md:w-auto md:h-[500px] max-w-full object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </motion.div>

              {/* เนื้อหาขวา */}
              <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4">
                <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
                  {item.title}
                </h1>
                <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to={`/contenttample${item.id}`}
                    className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
                  >
                    ดูเพิ่มเติม
                  </Link>
                </motion.div>
              </div>
            </>
          ) : (
            <>
              {/* เนื้อหาซ้าย */}
              <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4 md:mx-auto">
                <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
                  {item.title}
                </h1>
                <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to={`/contenttample${item.id}`}
                    className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all"
                  >
                    ดูเพิ่มเติม
                  </Link>
                </motion.div>
              </div>

              {/* ภาพขวา */}
              <motion.div
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[280px] md:w-auto md:h-[500px] max-w-full object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </motion.div>
            </>
          )}
        </motion.section>
      ))}
    </>
  );
}
