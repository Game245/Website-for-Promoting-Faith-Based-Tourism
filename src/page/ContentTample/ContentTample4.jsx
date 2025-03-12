import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../../components/Comment";
import { Datacontent } from "../../DataContent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/Card";

export default function ContentTample4() {
  const currentDate = new Date().toLocaleDateString("th-TH");
  const [likes, setLikes] = useState(false);
  const displayedItems = [Datacontent[3].id];

  const clicklikes = () => {
    setLikes(!likes);
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
                      src=""
                      alt=""
                      className="w-8 h-8 bg-gray-300 rounded-full "
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
                  {Datacontent[3].title}
                </h1>
              </div>
            </div>
            {/* YouTube Video */}
            <div className="mt-6 bg-gray-100 shadow-lg p-2 rounded-lg">
              <div className="flex justify-center">
                <iframe
                  className="w-full md:h-96 h-64 rounded-lg"
                  src={Datacontent[3].youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
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
                  className="w-full h-auto  rounded-lg  object-cover"
                />
              </a>
            </div>
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[3].recommend}
              </p>
              <h1 className="text-2xl font-bold mt-6">ประวัติ</h1>
              <p className="leading-relaxed  whitespace-pre-line">
                {Datacontent[3].history}
              </p>
            </div>
            {/* social media */}
            <div className="border-b border-gray-300 border-t py-2 flex justify-between items-cente">
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
            </div>
            <div className="mt-6 bg-gray-100 shadow-lg p-2 rounded-lg">
              <div className="text-4xl font-bold text-center mb-5 flex justify-center items-center">
                <FaMapLocationDot className="inline-block mr-2" />
                <h1 className="inline-block">Location</h1>
              </div>
              <iframe
                src={Datacontent[3].maps}
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
                .slice(2, 5) // ✅ เอาแค่ 3 รายการ
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
