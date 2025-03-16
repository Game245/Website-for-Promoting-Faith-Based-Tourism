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

export default function Rituals9() {
  const currentDate = new Date().toLocaleDateString("th-TH");
  const [likes, setLikes] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const displayedItems = [Datacontent[5].id];
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
    if (Datacontent.length > 8) {
      setContent(Datacontent[8]);
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
                      className="w-8 h-8 rounded-full "
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
                  className="font-bold text-4xl md:text-[80px] leading-tight mb-10"
                  initial={{ y: -100, opacity: 0 }} // เริ่มที่ y = -100 และ opacity = 0
                  animate={{ y: 0, opacity: 1 }} // เมื่อโหลดแล้วขยับขึ้นและ opacity เพิ่ม
                  transition={{ duration: 0.6 }} // ระยะเวลา
                >
                  {Datacontent[8].title}
                </motion.h1>
              </div>
            </motion.div>
            {/* หัวข้อ */}
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <h1 className="text-2xl font-bold"></h1>
              <motion.p
                className="leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Datacontent[8].wish}
              </motion.p>
            </div>
            {/* ปุ่มเปิดป๊อบอัพ */}
            <div className="flex justify-end md:gap-4 gap-2 mt-5 mb-5">
              {/* ปุ่มเสียง */}
              <motion.button
                onClick={() => readAloud(Datacontent[8].wish)}
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
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">📅 กิจกรรมปี 68</h2>
                    <FaTimes
                      className="cursor-pointer text-red-500"
                      onClick={() => setShowPopup(null)}
                    />
                  </div>
                  <ul className="mt-4 text-gray-700">
                    {activities.map((event, index) => (
                      <li key={index} className="mb-2">
                        ✅ {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* 🏺 ป๊อบอัพวัตถุมงคล */}
            {showPopup === "amulet" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black/30 px-5"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">🏺 {amuletData.name}</h2>
                    <FaTimes
                      className="cursor-pointer text-red-500"
                      onClick={() => setShowPopup(null)}
                    />
                  </div>
                  <img
                    src={amuletData.image}
                    alt={amuletData.name}
                    className="w-full h-40 object-cover rounded-md mt-2"
                  />
                  <p className="text-gray-700 mt-2">{amuletData.description}</p>
                  <p className="text-gray-900 font-bold mt-2">
                    💰 ราคา: {amuletData.price}
                  </p>
                  <p className="text-gray-700 mt-2">
                    🙏 วิธีบูชา: {amuletData.howToWorship}
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
                {(Array.isArray(Datacontent[8].tagsmyth)
                  ? Datacontent[8].tagsmyth
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
