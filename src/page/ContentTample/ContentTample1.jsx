import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent, Image } from "../../DataContent";
import Card from "../../components/Card";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion"; // เพิ่มการ import motion
import { TbView360Number } from "react-icons/tb";
import Gallery from "../../components/Gallery";
import { FaYoutube } from "react-icons/fa";

export default function ContentTample1() {
  const currentDate = new Date().toLocaleDateString("th-TH");

  const [likes, setLikes] = useState(false);

  const displayedItems = [Datacontent[0].id];

  const clicklikes = () => {
    setLikes(!likes);
  };

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (Datacontent.length > 0) {
      setContent(Datacontent[0]);
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

  // ฟังก์ชันแชร์
  const shareContent = () => {
    const url = window.location.href; // URL ของหน้าปัจจุบัน
    const text = `${Datacontent[0].title} \n ${Datacontent[0].recommend}`; // ข้อความที่จะแชร์

    // ใช้ window.open สำหรับแชร์บน Facebook, Twitter, WhatsApp
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(text)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      text
    )}%20${encodeURIComponent(url)}`;

    // สร้างหน้าต่างใหม่สำหรับการแชร์
    const shareWindow = window.open("", "_blank", "width=600,height=400");
    shareWindow.document.write(`
      <html>
        <head><title>แชร์</title></head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h3>แชร์ไปยัง</h3>
          <ul>
            <li><a href="${shareUrl}" target="_blank" style="color: #3b5998; text-decoration: none; font-size: 18px;">Facebook</a></li>
            <li><a href="${twitterUrl}" target="_blank" style="color: #00aced; text-decoration: none; font-size: 18px;">Twitter</a></li>
            <li><a href="${whatsappUrl}" target="_blank" style="color: #25D366; text-decoration: none; font-size: 18px;">WhatsApp</a></li>
          </ul>
        </body>
      </html>
    `);
  };
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
                {/* button แชร์ */}
                <div>
                  <IoIosShareAlt
                    className="text-3xl cursor-pointer"
                    onClick={shareContent}
                  />
                </div>
              </div>
              <div className="flex justify-center text-center border-b border-gray-300 mt-1">
                <motion.h1
                  className="font-bold text-4xl md:text-[80px] leading-tight mb-1"
                  initial={{ y: -100, opacity: 0 }} // เริ่มที่ y = -100 และ opacity = 0
                  animate={{ y: 0, opacity: 1 }} // เมื่อโหลดแล้วขยับขึ้นและ opacity เพิ่ม
                  transition={{ duration: 0.6 }} // ระยะเวลา
                >
                  {Datacontent[0].title}
                </motion.h1>
              </div>
            </motion.div>

            {/* slide */}
            <div className="flex justify-center mt-6">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={Datacontent[0].img}
                  alt={Datacontent[0].title}
                  className="md:w-full h-auto w-[600px]  rounded-lg  object-cover"
                />
              </a>
            </div>
            {/* Gallery */}
            <Gallery />
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[0].recommend}
              </p>
              <h1 className="text-2xl font-bold mt-6">ประวัติ</h1>
              <motion.p
                className="leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Datacontent[0].history}
              </motion.p>
            </div>

            

            {/* social media */}
            <motion.div
              className="border-b border-gray-300 border-t py-2 flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 items-center">
                {(Array.isArray(Datacontent[0].tagsdestinations)
                  ? Datacontent[0].tagsdestinations
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
            {/* อ้างอิง */}
            <div className="mt-6 bg-gray-100 shadow-lg p-4 rounded-lg border-l-4 border-blue-500 max-w-5xl mx-auto">
              <h2 className="text-xl font-bold text-blue-600">📌 อ้างอิง</h2>
              <p className="mt-2 text-gray-700 whitespace-pre-line">
                นางสาวขนิษฐา ทุมมากรณ์, นางปริญญา บุญศรัทธา. (2558).
                วัดมหาวนาราม. สืบค้นเมื่อ 10 มีนาคม 2568, จาก 
                <a
                  href="https://www.esanpedia.oar.ubu.ac.th/esaninfo"
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
                  href="https://www.facebook.com/Watmahawanaram/?locale=th_TH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  facebook.com/Watmahawanaram
                </a>
              </p>
            </div>
            {/* YouTube Video */}
            <div className="mt-6 bg-gray-100 shadow-lg p-4 rounded-lg max-w-5xl mx-auto">
              <div className="flex items-center justify-center text-1xl md:text-4xl font-bold">
                <FaYoutube className="mr-2 text-red-500" />
                <h2 className="text-1xl md:text-4xl font-bold">วิดีโอแนะนำ</h2>
              </div>
              <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={Datacontent[0].youtube}
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
                    src={Datacontent[0].maps}
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
                    src="https://www.google.com/maps/embed?pb=!4v1742361273857!6m8!1m7!1sCAoSLEFGMVFpcE9mZllXMGpqWjNIWDRYaXRheXNIT2FwU3U2MzFWSjFjaXo0STk0!2m2!1d15.23466417765222!2d104.8633720423701!3f0!4f0!5f0.4000000000000002"
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
