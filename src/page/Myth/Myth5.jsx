import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent,Image } from "../../DataContent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/Card";

export default function Myth5() {
  const currentDate = new Date().toLocaleDateString("th-TH");

  const [likes, setLikes] = useState(false);

  const displayedItems = [Datacontent[4].id];

  const clicklikes = () => {
    setLikes(!likes);
  };

  return (
    <>
      <div className="container mx-auto  p-4  w-full">
        {/* button กลับ */}
        <Link
          to="/myth"
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
                  {Datacontent[4].title}
                </h1>
              </div>
            </div>
            {/* หัวข้อ */}
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <h1 className="text-2xl font-bold">เรื่องเล่า</h1>
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[4].myth}
              </p>
            </div>
            {/* social media */}
            <div className="border-b border-gray-300 border-t py-2 flex justify-between items-cente">
              <div className="flex gap-2 items-center">
                {(Array.isArray(Datacontent[4].tagsmyth)
                  ? Datacontent[4].tagsmyth
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
        </div>
        <section className="mt-10 mb-10">
          {/* Additional Information */}
          <h1 className="text-center text-2xl font-bold py-3">เพิ่มเติม</h1>

          {Datacontent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
              {Datacontent.filter((item) => !displayedItems.includes(item.id)) // ❌ ไม่แสดงรายการซ้ำ
                .slice(2, 5) // ✅ เอาแค่ 3 รายการ
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
