import React from "react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Comment from "../components/Comment";

export default function ContentTample() {
  const Img =
    "https://fastly.picsum.photos/id/620/800/600.jpg?hmac=myYdm-m04yuvkbQkrJvv-SoW9ugPJBEQhBTPTZ6enFU";
  const currentDate = new Date().toLocaleDateString("th-TH");

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
                  วัดสารพัดนึก
                </h1>
              </div>
            </div>
            {/* หัวข้อ */}
            <div className="flex justify-center mt-6">
              <img
                src={Img}
                alt="วัดสารพัดนึก"
                className="w-full h-auto  rounded-lg  object-cover"
              />
            </div>
            {/* เนื้อหา */}
            <div className="my-5 text-justify text-gray-700">
              <p className="leading-relaxed">
                อำเภอเมือง จังหวัดอุบลราชธานี
                เป็นสถานที่ที่มีความเชื่อในเรื่องการขอพรในหลากหลายด้าน
                ตามความต้องการของผู้ที่มาขอพร โดยคำว่า “สารพัดนึก”
                ในชื่อวัดเองก็มาจากการที่สามารถขอพรได้ทุกเรื่องที่ผู้คนคิดถึงหรือมีความต้องการโดยโบราณสถานและโบราณวัตถุที่สำคัญ
                ได้แก่ พระเกสรดอกไม้
                พระพุทธรูปไม้ปางมารวิชัยรูปหล่อพระบูรพาจารย์
                กุฏิราษฎร์พิทักษ์สีนุสรณ์
                คำภีร์ใบลานสถานที่เหล่านี้มีความสำคัญในทางศาสนาและเป็นแหล่งท่องเที่ยวเชิงศรัทธาที่ดึงดูดนักท่องเที่ยวและผู้ที่มีความเชื่อในสายมูจากทั่วประเทศและต่างประเทศ
              </p>
            </div>
            <div className="mt-6 bg-gray-100 shadow-lg p-2 rounded-lg">
              <div className="text-4xl font-bold text-center mb-5 flex justify-center items-center">
                <FaMapLocationDot className="inline-block mr-2" />
                <h1 className="inline-block">Location</h1>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4566.322849099694!2d104.86011448439287!3d15.238019323338214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311687d155555555%3A0xf4ef857357d9bb81!2z4Lin4Lix4LiU4Liq4Liy4Lij4Lie4Lix4LiS4LiZ4Li24LiB!5e1!3m2!1sth!2sth!4v1740202061520!5m2!1sth!2sth"
                className="w-full md:h-150 h-80 rounded-lg"
              ></iframe>
            </div>
            {/* social media */}
            <div>
              <div></div>
            </div>
          </section>

          <section>{/* Additional Information */}</section>
        </div>
        <Comment />
      </div>
      
    </>
  );
}
