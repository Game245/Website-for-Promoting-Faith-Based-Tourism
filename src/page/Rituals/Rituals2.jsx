import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import { motion } from "framer-motion"; // เพิ่ม import สำหรับ framer-motion
import Comment from "../../components/Comment";
import { Datacontent, Image } from "../../DataContent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/Card";

export default function Rituals2() {
  const currentDate = new Date().toLocaleDateString("th-TH");
  const [likes, setLikes] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const displayedItems = [Datacontent[1].id];
  // ฟังก์ชันเพื่อให้เสียงอ่าน
  const readAloud = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "th-TH"; // เลือกภาษาภาษาไทย

    if (isPlaying) {
      // Pause speech if it's playing
      speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      // Cancel any ongoing speech and start a new utterance
      speechSynthesis.cancel(); // ล้างการพูดก่อนหน้า
      speechSynthesis.speak(utterance); // เริ่มการอ่านใหม่
      setIsPlaying(true);

      // Update state when speech ends
      utterance.onend = () => {
        setIsPlaying(false);
      };
    }
  };

  const clicklikes = () => {
    setLikes(!likes);
  };

  return (
    <>
      <div className="container mx-auto p-4 w-full">
        {/* button กลับ */}
        <Link
          to="/rituals"
          className="flex justify-between gap-2 items-center mb-3 "
        >
          <div className="flex gap-2 items-center p-2 cursor-pointer bg-black text-white rounded-lg hover:bg-gray-600">
            <RiArrowGoBackFill className="text-3xl " />
            <p className="font-bold">ย้อนกลับ</p>
          </div>
          <div></div>
        </Link>

        {/* กล่อง */}
        <div className="max-w-screen mx-auto px-6 md:px-20 py-10 md:py-20 border bg-white shadow-lg rounded-lg">
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between font-bold items-center">
                <div className="flex gap-1 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={Image[0].img}
                      alt={Image[0].title}
                      className="w-8 h-8 rounded-full"
                    />
                    <p>UBRU</p>
                  </div>
                  <div>:</div>
                  <div>{currentDate}</div>
                </div>
                <div>
                  <IoIosShareAlt className="text-3xl cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-center text-center border-b border-gray-300 mt-1">
                <motion.h1
                  className="font-bold text-4xl md:text-[80px] leading-tight mb-1"
                  initial={{ y: -100, opacity: 0 }} // เริ่มที่ y = -100 และ opacity = 0
                  animate={{ y: 0, opacity: 1 }} // เมื่อโหลดแล้วขยับขึ้นและ opacity เพิ่ม
                  transition={{ duration: 0.6 }} // ระยะเวลา
                >
                  {Datacontent[1].title}
                </motion.h1>
              </div>
            </motion.div>

            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <h1 className="text-2xl font-bold">
                คาถาบูชาพระเจ้าใหญ่อินทร์แปง
              </h1>
              <motion.p
                className="leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Datacontent[1].wish}
              </motion.p>
            </div>

            {/* ปุ่มเสียง */}
            <motion.div
              className="flex justify-center m-10"
              initial={{ opacity: 0 }} // เริ่มที่ opacity 0
              animate={{ opacity: 1 }} // ทำให้ opacity = 1
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <button
                onClick={() => readAloud(Datacontent[0].wish)} // คลิกแล้วให้เสียงอ่านข้อความ
                className="bg-sky-500 text-white px-6 py-3  hover:bg-sky-600 transition-all rounded-full cursor-pointer"
              >
                {isPlaying ? "หยุดอ่าน" : "อ่านบทสวด"}
              </button>
            </motion.div>

            {/* social media */}
            <motion.div
              className="border-b border-gray-300 border-t py-2 flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 items-center">
                {(Array.isArray(Datacontent[1].tagsmyth)
                  ? Datacontent[1].tagsmyth
                  : []
                ).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 rounded-[25px] px-2 py-1 md:rounded-full md:px-3 md:py-1 md:text-sm text-[10px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={clicklikes}
                className="flex items-center gap-2 cursor-pointer"
              >
                {likes ? (
                  <FaHeart className="text-red-500 text-3xl" />
                ) : (
                  <CiHeart className="text-gray-500 text-3xl" />
                )}
                <span className="text-lg">
                  {likes ? "คุณถูกใจสิ่งนี้!" : "กดไลก์"}
                </span>
              </button>
            </motion.div>
          </section>
        </div>

        {/* Additional Information Section */}
        <section className="mt-10 mb-10">
          <motion.h1
            className="text-center text-2xl font-bold py-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            เพิ่มเติม
          </motion.h1>

          {Datacontent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
              {Datacontent.filter((item) => !displayedItems.includes(item.id)) // ❌ ไม่แสดงรายการซ้ำ
                .slice(0, 3) // ✅ เอาแค่ 3 รายการ
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/rituals${item.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card {...item} />
                    </motion.div>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-500 text-center">
                ❌ ไม่มีข้อมูลเพิ่มเติม
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
