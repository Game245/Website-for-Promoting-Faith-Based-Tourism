import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent, Image, activities, amuletData } from "../../DataContent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/Card";
import { motion } from "framer-motion";
import { FaHome, FaTimes } from "react-icons/fa";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function Rituals3() {
  const currentDate = new Date().toLocaleDateString("th-TH");
  const [likes, setLikes] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const displayedItems = [Datacontent[2].id];
  // ฟังก์ชันเพื่อให้เสียงอ่าน
  const [showPopup, setShowPopup] = useState(null); // null = ไม่แสดง popup
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

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (Datacontent.length > 2) {
      setContent(Datacontent[2]);
    }
  }, []);

  if (!content)
    return (
      <div className="h-screen w-full flex justify-center items-center bg-gray-100">
        <p className="text-center text-gray-500 text-2xl font-semibold animate-pulse">
          กำลังโหลด...
        </p>
      </div>
    );

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3 text-gray-600 overflow-x-auto whitespace-nowrap">
        <nav className="flex items-center gap-2 md:text-sm text-[8px]">
          <Link
            to="/"
            className="flex items-center gap-1 text-blue-500 font-medium hover:underline hover:text-blue-300"
          >
            <FaHome /> หน้าแรก
          </Link>
          <span className="text-gray-400">›</span>
          <Link to="/rituals">
            <span className="text-gray-800 hover:underline hover:text-blue-400">
              วิธีการไหว้และพิธีกรรม
            </span>
          </Link>

          <span className="text-gray-400">››</span>
          <span className="text-gray-800">{content.title}</span>
        </nav>
      </div>
      <div className="container mx-auto  p-4  w-full">
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
                      className="w-8 h-8  rounded-full "
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
                  {Datacontent[2].title}
                </motion.h1>
              </div>
            </motion.div>
            {/* หัวข้อ */}
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <motion.p
                className="leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Datacontent[2].wish}
              </motion.p>
            </div>

            {/* ปุ่มเปิดป๊อบอัพ */}
            <div className="flex justify-end md:gap-4 gap-2 mt-5 mb-5">
              {/* ปุ่มเสียง */}
              <motion.button
                onClick={() => readAloud(Datacontent[2].wish)}
                className={`${
                  isPlaying
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-blue-600"
                } text-white md:px-3 md:py-2 px-3 py-2 rounded-lg transition-all cursor-pointer text-[10px] md:text-[12px] flex items-center justify-center gap-2`}
                initial={{ opacity: 0, scale: 0.95 }} // เริ่มที่ opacity 0 และขนาดเล็ก
                animate={{ opacity: 1, scale: 1 }} // ขนาดปกติและ opacity = 1
                transition={{ duration: 0.45 }}
                whileHover={{ scale: 1.05 }} // ขยายขนาดเมื่อ hover
              >
                {/* แสดงไอคอนเสียง VolumeUp หรือ VolumeMute ตามสถานะของ isPlaying */}
                {isPlaying ? (
                  <>
                    <FaVolumeMute className="text-white" /> หยุดเสียง
                  </>
                ) : (
                  <>
                    <FaVolumeUp className="text-white" /> เล่นเสียง
                  </>
                )}
              </motion.button>

              {/* ปุ่มกิจกรรม */}
              <motion.button
                className="bg-blue-500 text-white md:px-3 md:py-2 px-3 py-2 rounded-lg hover:bg-blue-600 transition-all cursor-pointer text-[10px] md:text-[12px]"
                onClick={() => setShowPopup("activities")}
                initial={{ opacity: 0, scale: 0.95 }} // เริ่มที่ opacity 0 และขนาดเล็ก
                animate={{ opacity: 1, scale: 1 }} // ขนาดปกติและ opacity = 1
                transition={{ duration: 0.45 }}
                whileHover={{ scale: 1.05 }} // ขยายขนาดเมื่อ hover
              >
                กิจกรรม
              </motion.button>

              {/* ปุ่มวัตถุมงคล */}
              <motion.button
                className="bg-yellow-500 text-white md:px-3 md:py-2 px-3 py-2 rounded-lg hover:bg-green-600 transition-all cursor-pointer text-[10px] md:text-[12px]"
                onClick={() => setShowPopup("amulet")}
                initial={{ opacity: 0, scale: 0.95 }} // เริ่มที่ opacity 0 และขนาดเล็ก
                animate={{ opacity: 1, scale: 1 }} // ขนาดปกติและ opacity = 1
                transition={{ duration: 0.45 }}
                whileHover={{ scale: 1.05 }} // ขยายขนาดเมื่อ hover
              >
                วัตถุมงคล
              </motion.button>
            </div>

            {/* 🏆 ป๊อบอัพกิจกรรม */}
            {showPopup === "activities" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black/30"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md m-5">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">📅 กิจกรรมปี 68</h2>
                    <FaTimes
                      className="cursor-pointer text-red-500"
                      onClick={() => setShowPopup(null)}
                    />
                  </div>
                  <ul className="mt-4 text-gray-700">
                    {activities[2].dedcriptionactivities.map((event, index) => (
                      <li key={index} className="mb-2">
                        ✅ {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* 🏆 ป๊อบอัพกิจกรรม */}
            {showPopup === "amulet" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black/30 px-5 z-50"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg lg:max-w-xl mt-10 max-h-screen overflow-y-auto relative">
                  {/* ปุ่มปิด */}
                  <FaTimes
                    className="absolute top-5 right-5 cursor-pointer text-red-500 text-2xl"
                    onClick={() => setShowPopup(null)}
                  />

                  {/* หัวข้อ */}
                  <h2 className="text-1xl md:text-xl font-bold text-center ">
                    🏺 {amuletData[2].name}
                  </h2>

                  {/* รูปภาพแบบ responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full justify-items-center p-5">
                    {amuletData[2].image.map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`${amuletData[2].name} - ${index + 1}`}
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-md"
                      />
                    ))}
                  </div>

                  {/* รายละเอียดพระเครื่อง */}
                  <p className="text-gray-700 text-sm md:text-base mt-2">
                    {amuletData[2].description}
                  </p>
                  <p className="text-gray-900 font-bold text-sm md:text-base mt-2">
                    💰 ราคา: {amuletData[2].price}
                  </p>
                  <p className="text-gray-700 text-sm md:text-base mt-2">
                    🙏 วิธีบูชา: {amuletData[2].howToWorship}
                  </p>
                </div>
              </motion.div>
            )}
            {/* social media */}
            <motion.div
              className="border-b border-gray-300 border-t py-2 flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 items-center">
                {(Array.isArray(Datacontent[2].tagsrituals)
                  ? Datacontent[2].tagsrituals
                  : []
                ).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 rounded-[25px] px-2 py-1  md:rounded-full md:px-3 md:py-1 md:text-sm  text-[10px] font-bold  "
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
        {/* อ้างอิง */}
        <div className="mt-6 bg-gray-100 shadow-lg p-4 rounded-lg border-l-4 border-blue-500 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-blue-600">📌 อ้างอิง</h2>
          <p className="mt-2 text-gray-700 whitespace-pre-line">
            แหล่งที่มา :
            <a
              href="https://www.esanpedia.oar.ubu.ac.th/esaninfo/?p=432"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              esanpedia.oar.ubu.ac.th
            </a>
          </p>

          <p className="mt-2 text-gray-700 whitespace-pre-line">
            📌 ช่องทางติดต่อวัด : FB :
            <a
              href="https://www.facebook.com/p/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7-100064583836945/?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              facebook
            </a>
          </p>
        </div>
        <section className="mt-10 mb-10">
          {/* Additional Information */}
          <h1 className="text-center text-2xl font-bold py-3">เพิ่มเติม</h1>

          {Datacontent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
              {Datacontent.filter((item) => !displayedItems.includes(item.id))
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                // ✅ เอาแค่ 3 รายการ
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/rituals${item.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <Card {...item} />
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
