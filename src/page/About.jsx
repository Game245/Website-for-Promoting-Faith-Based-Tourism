import React from "react";
import kunakon from "../assets/images/kunakon.png";
import sok from "../assets/images/Sok.png";
import pich from "../assets/images/Pich.png";
import yosita from "../assets/images/Yosita.png";
import tana from "../assets/images/Tana.png";
import wixa from "../assets/images/Wixa.png";
import devid from "../assets/images/Devid.png";

export default function About() {
  const teamMembers = [
    { name: "นางสาวโยษิตา ชาชำนาน", img: yosita },
    { name: "นายคุณากร ภูถาดงา", img: kunakon },
    { name: "นายธนชาติ ธนงศักดิ์", img: tana },
    { name: "นายวิศวชิต กิ่งแสง", img: wixa },
    { name: "นาย SOK BORAMY SUY", img: sok },
    { name: "นาย SOVICHEAT CHUM", img: devid },
    { name: "นางสาว PICHVOLEAK KUN", img: pich },
  ];

  return (
    <>
      {/* ส่วนแนะนำเกี่ยวกับเรา */}
      <div className="container flex flex-col items-center justify-center mx-auto p-6 text-center ">
        <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
        <p className="text-gray-600">
          เราคือทีมนักศึกษาสาขาเทคโนโลยีสารสนเทศ
          จากมหาวิทยาลัยราชภัฏอุบลราชธานี
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
      </div>

      {/* หัวข้อคณะผู้จัดทำ */}
      <div className="mt-12 text-center">
        <h1 className="text-3xl font-bold">คณะผู้จัดทำ</h1>
      </div>

      {/* แสดงโปรไฟล์ทีมงาน */}
      <section className="flex flex-col items-center mt-5">
        <div className="flex flex-col items-center">
          <div className="w-32 md:w-40 h-auto">
            <img
              src={yosita}
              alt="รูปภาพของ นางสาวโยษิตา ชาชำนาน"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-xl font-semibold mt-4">นางสาวโยษิตา ชาชำนาน</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>
      </section>

      {/* แสดงรายชื่อทีมงานที่เหลือ */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-10 mb-10">
        {teamMembers.slice(1).map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 md:w-40 h-auto">
              <img
                src={member.img}
                alt={`รูปภาพของ ${member.name}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-xl font-semibold mt-4">{member.name}</p>
            <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
          </div>
        ))}
      </section>
    </>
  );
}
