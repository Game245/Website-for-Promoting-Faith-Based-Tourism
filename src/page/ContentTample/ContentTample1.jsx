import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent,Image } from "../../DataContent";
import Card from "../../components/Card";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function ContentTample1() {
  const currentDate = new Date().toLocaleDateString("th-TH");

  const [likes, setLikes] = useState(false);

  const displayedItems = [Datacontent[0].id];

  const clicklikes = () => {
    setLikes(!likes);
  };

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
      <div className="container mx-auto  p-4  w-full">
        {/* button กลับ */}
        <Link
          to="/destinations"
          className="flex justify-between gap-2 items-center mb-3 "
        >
          <div className="flex gap-2 items-center p-2  cursor-pointer bg-black text-white rounded-lg hover:bg-gray-600">
            <RiArrowGoBackFill className="text-3xl " />
            <p className="font-bold">ย้อนกลับ</p>
          </div>
          <div></div>
        </Link>
        {/* กล่อง */}
        <div className="max-w-screen mx-auto px-6 md:px-20 py-10 md:py-20 border bg-white shadow-lg rounded-lg">
          <section>
            <div>
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
                  <IoIosShareAlt className="text-3xl cursor-pointer" onClick={shareContent} />
                </div>
              </div>
              <div className="flex justify-center text-center border-b border-gray-300 mt-1">
                <h1 className="font-bold text-4xl md:text-[80px] leading-tight  mb-1">
                  {Datacontent[0].title}
                </h1>
              </div>
            </div>
            
            {/* slide */}
            <div className="flex justify-center mt-6">
              <a
                href="https://www.facebook.com/share/p/1Bvkoumx5p/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Datacontent[0].img}
                  alt={Datacontent[0].title}
                  className="w-full h-auto  rounded-lg  object-cover"
                />
              </a>
            </div>
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[0].recommend}
              </p>
              <h1 className="text-2xl font-bold mt-6">ประวัติ</h1>
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[0].history}
              </p>
            </div>
            
            {/* social media */}
            <div className="border-b border-gray-300 border-t py-2 flex justify-between items-cente">
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
            </div>
                {/* YouTube Video */}
            <div className="mt-6 bg-gray-100 shadow-lg p-2 rounded-lg">
              <div className="flex justify-center">
                <iframe
                  className="w-full md:h-96 h-64 rounded-lg"
                  src={Datacontent[0].youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-6 bg-gray-100 shadow-lg p-2 rounded-lg">
              <div className="text-4xl font-bold text-center mb-5 flex justify-center items-center">
                <FaMapLocationDot className="inline-block mr-2" />
                <h1 className="inline-block">Location</h1>
              </div>
              <iframe
                src={Datacontent[0].maps}
                className="w-full md:h-150 h-80 rounded-lg"
              ></iframe>
            </div>
          </section>
        </div>
        <Comment />
        <section className="mt-10 mb-10">
          {/* Additional Information */}
          <h1 className="text-center text-2xl font-bold py-3">เพิ่มเติม</h1>

          {Datacontent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
              {Datacontent.filter((item) => !displayedItems.includes(item.id)) // ❌ ไม่แสดงรายการซ้ำ
                .slice(0, 3) // ✅ เอาแค่ 3 รายการ
                .map((item) => (
                  <Link key={item.id} to={`/contenttample${item.id}`}>
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


