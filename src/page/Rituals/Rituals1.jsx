import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent, Image } from "../../DataContent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/Card";

export default function Rituals1() {
  const currentDate = new Date().toLocaleDateString("th-TH");
  const [likes, setLikes] = useState(false);
  const displayedItems = [Datacontent[0].id];

  const clicklikes = () => {
    setLikes(!likes);
  };

  useEffect(() => {
        // โหลดสคริปต์ของ TikTok หลังจาก mount
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);
  
  return (
    <>
      <div className="container mx-auto  p-4  w-full">
        {/* button กลับ */}
        <Link
          to="/rituals"
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
                <h1 className="font-bold text-4xl md:text-[80px] leading-tight  mb-1">
                  {Datacontent[0].title}
                </h1>
              </div>
            </div>
            {/* หัวข้อ */}
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <h1 className="text-2xl font-bold">
                คาถาบูชาพระเจ้าใหญ่อินทร์แปง
              </h1>
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[0].wish}
              </p>
            </div>
            {/* social media */}
            <div className="border-b border-gray-300 border-t py-2 flex justify-between items-cente">
              <div className="flex gap-2 items-center">
                {(Array.isArray(Datacontent[0].tagsmyth)
                  ? Datacontent[0].tagsmyth
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
          </section>
          <section className="w-full flex justify-center">
            <blockquote
              class="tiktok-embed"
              cite="https://www.tiktok.com/@eves_ubon/video/7190701732194831642"
              data-video-id="7190701732194831642"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@eves_ubon"
                  href="https://www.tiktok.com/@eves_ubon?refer=embed"
                >
                  @eves_ubon
                </a>{" "}
                พาน้องปัณปัณ ไหว้พระขอพร ครบ 1 ขวบ{" "}
                <a
                  title="น้องปัณปัณลูกแม่ค้าขายอีฟส์"
                  target="_blank"
                  href="https://www.tiktok.com/tag/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B8%93%E0%B8%9B%E0%B8%B1%E0%B8%93%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B5%E0%B8%9F%E0%B8%AA%E0%B9%8C?refer=embed"
                >
                  #น้องปัณปัณลูกแม่ค้าขายอีฟส์
                </a>{" "}
                <a
                  title="อีฟส์อุบล"
                  target="_blank"
                  href="https://www.tiktok.com/tag/%E0%B8%AD%E0%B8%B5%E0%B8%9F%E0%B8%AA%E0%B9%8C%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5?refer=embed"
                >
                  #อีฟส์อุบล
                </a>{" "}
                <a
                  title="eves"
                  target="_blank"
                  href="https://www.tiktok.com/tag/eves?refer=embed"
                >
                  #eves
                </a>{" "}
                <a
                  title="evesubon"
                  target="_blank"
                  href="https://www.tiktok.com/tag/evesubon?refer=embed"
                >
                  #evesubon
                </a>{" "}
                <a
                  title="วัดป่าใหญ่จังหวัดอุบลฯ"
                  target="_blank"
                  href="https://www.tiktok.com/tag/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%AF?refer=embed"
                >
                  #วัดป่าใหญ่จังหวัดอุบลฯ
                </a>{" "}
                <a
                  title="ท้าวเวสสุวรรณวัดป่าใหญ่อุบลฯ"
                  target="_blank"
                  href="https://www.tiktok.com/tag/%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%A7%E0%B8%AA%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%AF?refer=embed"
                >
                  #ท้าวเวสสุวรรณวัดป่าใหญ่อุบลฯ
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ Aesthetic - Tollan Kim"
                  href="https://www.tiktok.com/music/Aesthetic-7072513628145977346?refer=embed"
                >
                  ♬ Aesthetic - Tollan Kim
                </a>{" "}
              </section>
            </blockquote>
          </section>
        </div>
        <section className="mt-10 mb-10">
          {/* Additional Information */}
          <h1 className="text-center text-2xl font-bold py-3">เพิ่มเติม</h1>

          {Datacontent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
              {Datacontent.filter((item) => !displayedItems.includes(item.id)) // ❌ ไม่แสดงรายการซ้ำ
                .slice(0, 3) // ✅ เอาแค่ 3 รายการ
                .map((item) => (
                  <Link key={item.id} to={`/myth${item.id}`}>
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
