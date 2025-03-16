import React, { useState } from "react";
import { motion } from "framer-motion"; // นำเข้า framer-motion
import Person1 from "../assets/images/Person1.png";
import Person2 from "../assets/images/Person2.png";
import Person3 from "../assets/images/Person3.png";
import Person4 from "../assets/images/Person4.png";
import Person5 from "../assets/images/Person5.png";
import Person6 from "../assets/images/Person6.png";
import Person7 from "../assets/images/Person7.png";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const teamMembers = [
    { name: "นางสาวโยษิตา ชาชำนาน", img:  Person4 , quote: "เชื่อมั่นในพลังแห่งศรัทธา แล้วสิ่งดี ๆ จะเกิดขึ้น 🍀" },
    { name: "นายคุณากร ภูถาดงา", img:  Person1, quote: "เสริมดวงด้วยความดี แล้วโชคจะเข้าหาเราเอง ✨" },
    { name: "นายธนชาติ ธนงศักดิ์", img:  Person5, quote: "สวดมนต์ทุกวัน เสริมพลังงานบวกให้ชีวิต 🙏" },
    { name: "นายวิศวชิต กิ่งแสง", img:  Person6, quote: "อย่าหยุดขอพร เพราะคำอธิษฐานเป็นพลังให้เราเดินต่อ 🌟" },
    { name: "นาย SOK BORAMY SUY", img:  Person2, quote: "มั่นใจในโชคชะตา แล้วชีวิตจะพาไปในทางที่ดี 🚀" },
    { name: "นาย SOVICHEAT CHUM", img:  Person7, quote: "ความเชื่อเป็นพลังงานที่ดึงดูดสิ่งดี ๆ 🧲" },
    { name: "นางสาว PICHVOLEAK KUN", img:  Person3, quote: "มูอย่างมีสติ แล้วโชคจะเข้าหาแบบไม่ต้องขอ 🍃" },
  ];

  return (
    <>
    {/* Breadcrumb */}
          <div className="container mx-auto px-4 py-3 text-gray-600">
            <nav className="flex items-center gap-2 md:text-sm text-[12px]">
              <Link
                to="/"
                className="flex items-center gap-1 text-blue-500 font-medium hover:underline hover:text-blue-300"
              >
                <FaHome /> หน้าแรก
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-800">
              เกี่ยวกับเรา
              </span>
            </nav>
          </div>
      {/* ส่วนแนะนำเกี่ยวกับเรา */}
      <motion.div
        className="container flex flex-col items-center justify-center mx-auto p-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
        <p className="text-gray-600">
          เราคือทีมนักศึกษาสาขาเทคโนโลยีสารสนเทศ จากมหาวิทยาลัยราชภัฏอุบลราชธานี
          ที่มีความหลงใหลในการพัฒนาเว็บไซต์และเทคโนโลยีใหม่ ๆ
        </p>
        <div className="mt-6 my-6">
          <h2 className="text-2xl font-semibold">เป้าหมายของเรา</h2>
          <p className="text-gray-500">
            เราเชื่อว่าการท่องเที่ยวเชิงศรัทธา (สายมู)
            เป็นส่วนสำคัญที่ช่วยส่งเสริมวัฒนธรรมและเศรษฐกิจท้องถิ่น
            เป้าหมายของเราคือการสร้างแพลตฟอร์มที่ช่วยให้การท่องเที่ยวในจังหวัดอุบลราชธานี
            เป็นเรื่องง่ายและเข้าถึงได้สำหรับทุกคน
          </p>
        </div>
        <a
          href="https://www.facebook.com/itubrufc/?locale=th_TH"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline cursor-pointer"
        >
          Facebook
        </a>
      </motion.div>

      {/* หัวข้อคณะผู้จัดทำ */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-bold">คณะผู้จัดทำ</h1>
      </motion.div>

      {/* แสดงโปรไฟล์ทีมงาน */}
      <motion.section
        className="flex flex-col items-center mt-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center cursor-pointer">
          <motion.div
            className="w-32 md:w-40 h-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedMember(teamMembers[0])}
          >
            <motion.img
              src={yosita}
              alt="รูปภาพของ นางสาวโยษิตา ชาชำนาน"
              className="w-full h-auto rounded-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
          <p className="text-xl font-semibold mt-4">นางสาวโยษิตา ชาชำนาน</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>
      </motion.section>

      {/* แสดงรายชื่อทีมงานที่เหลือ */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-10 mb-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {teamMembers.slice(1).map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            onClick={() => setSelectedMember(member)}
          >
            <motion.div
              className="w-32 md:w-40 h-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.img}
                alt={`รูปภาพของ ${member.name}`}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <p className="text-xl font-semibold mt-4">{member.name}</p>
            <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Modal แสดงข้อมูลสมาชิก */}
      {selectedMember && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ปุ่มปิด (X) ที่ชัดเจน */}
            <button
              className="absolute top-2 right-2 p-3 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none "
              onClick={() => setSelectedMember(null)}
            >
              X
            </button>
            <motion.img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-32 h-auto rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold text-center mt-4">
              {selectedMember.name}
            </h2>
            <p className="text-center italic mt-2">{selectedMember.quote}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
