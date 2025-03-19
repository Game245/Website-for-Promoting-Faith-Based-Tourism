import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent, Image } from "../../DataContent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/Card";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion"; // เพิ่มการ import motion
import { TbView360Number } from "react-icons/tb";
import Gallery3 from "../../components/Gallery3";
import { FaYoutube } from "react-icons/fa";

export default function ContentTample4() {
  const currentDate = new Date().toLocaleDateString("th-TH");
  const [likes, setLikes] = useState(false);
  const displayedItems = [Datacontent[3].id];

  const clicklikes = () => {
    setLikes(!likes);
  };

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (Datacontent.length > 3) {
      setContent(Datacontent[3]);
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
          <Link to="/destinations">
            <span className="text-gray-800 hover:underline hover:text-blue-400">
              สถานที่ท่องเที่ยวเชิงศรัทธา (สายมู) อุบลราชธานี
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
                  {Datacontent[3].title}
                </motion.h1>
              </div>
            </motion.div>

            {/* หัวข้อ */}
            <div className="flex justify-center mt-6">
              <a
                href="https://cbtthailand.dasta.or.th/webapp/relattraction/content/2137/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Datacontent[3].img}
                  alt={Datacontent[3].title}
                  className="md:w-full h-auto w-[600px]  rounded-lg  object-cover"
                />
              </a>
              
            </div>
            <Gallery3 />
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[3].recommend}
              </p>
              <h1 className="text-2xl font-bold mt-6">ประวัติ</h1>
              <motion.p
                className="leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Datacontent[3].history}
              </motion.p>
            </div>
            {/* social media */}
            <motion.div
              className="border-b border-gray-300 border-t py-2 flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2">
                {(Array.isArray(Datacontent[3].tagsdestinations)
                  ? Datacontent[3].tagsdestinations
                  : []
                ).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-bold"
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
            {/* YouTube Video */}
            <div className="mt-6 bg-gray-100 shadow-lg p-4 rounded-lg max-w-5xl mx-auto">
              <div className="flex items-center justify-center text-1xl md:text-4xl font-bold">
                <FaYoutube className="mr-2 text-red-500" />
                <h2 className="text-1xl md:text-4xl font-bold">วิดีโอแนะนำ</h2>
              </div>
              <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={Datacontent[3].youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-6 bg-gray-100 shadow-lg p-6 rounded-lg max-w-5xl mx-auto">
              {/* Section: แผนที่ */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center text-1xl md:text-4xl font-bold">
                  <FaMapLocationDot className="mr-2 text-blue-500" />
                  <h1>แผนที่</h1>
                </div>
                <div className="mt-4">
                  <iframe
                    src={Datacontent[3].maps}
                    className="w-full h-80 md:h-120 rounded-lg shadow-md"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Section: ชมสถานที่รอบทิศ 360° */}
              <div className="text-center mt-10">
                <div className="flex items-center justify-center text-1xl md:text-4xl font-bold">
                  <TbView360Number className="mr-2 text-green-500" />
                  <h1>ชมสถานที่รอบทิศ 360°</h1>
                </div>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1742387079066!6m8!1m7!1sITEuDsKftsHZsuu3W7n6NA!2m2!1d15.23006762965995!2d104.8611471236839!3f174.5118725223381!4f-3.569038408665321!5f0.7820865974627469"
                    className="w-full h-80 md:h-120 rounded-lg shadow-md"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Comment />
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
                  <Link key={item.id} to={`/contenttample${item.id}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }} // เริ่มที่ opacity 0 และ ขนาดเล็ก
                      animate={{ opacity: 1, scale: 1 }} // เมื่อโหลดแล้วจะมี opacity 1 และขยายขนาด
                      transition={{ duration: 0.6 }} // ระยะเวลา
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
