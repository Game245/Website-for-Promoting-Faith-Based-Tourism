import React from "react";
import { motion } from "framer-motion";
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
      {/* ส่วนหัว */}
      <motion.section
        className="container mx-auto flex flex-col gap-8 mt-5 h-auto p-4 md:hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
          {Datacontent.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
            >
              <Card {...item} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ส่วนเนื้อหาหลัก */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center text-2xl md:text-4xl font-bold py-3">
          สถานที่ท่องเที่ยวเชิงศรัทธา <br />
          (สายมู) อุบลราชธานี
        </h1>
      </motion.div>

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
              <motion.div
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className=" h-[280px] md:w-auto md:h-[500px] max-w-full object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </motion.div>
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
              <div className="flex flex-col justify-center self-center md:items-start items-center max-w-lg gap-4 md:mx-auto">
                <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left ">
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
              <motion.div
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className=" h-[280px] md:w-auto md:h-[500px] max-w-full object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </motion.div>
            </>
          )}
        </motion.section>
      ))}
    </>
  );
}
