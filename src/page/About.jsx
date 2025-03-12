import React from "react";
import kunakon from "../assets/images/kunakon.png";
import Sok from "../assets/images/Sok.png";
import Pich from "../assets/images/Pich.png";
import Yosita from "../assets/images/Yosita.png";
import Tana from "../assets/images/Tana.png";
import Wixa from "../assets/images/Wixa.png";
import Devid from "../assets/images/Devid.png";

export default function About() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
        <p className="text-gray-600">
          เราคือทีมนักศึกษาสาขาเทคโนโลยีสารสนเทศ
          จากมหาวิทยาลัยราชภัฏอุบลราชธานี
          ที่มีความหลงใหลในการพัฒนาเว็บไซต์และเทคโนโลยีใหม่ ๆ
        </p>
        <div className="mt-6 my-6">
          <h2 className="text-2xl font-semibold ">เป้าหมายของเรา</h2>
          <p className="text-gray-500">
            เราเชื่อว่าการท่องเที่ยวเชิงศรัทธา (สายมู)
            เป็นส่วนสำคัญที่ช่วยส่งเสริมวัฒนธรรมและเศรษฐกิจท้องถิ่น
            เป้าหมายของเรา
            คือการสร้างแพลตฟอร์มที่ช่วยให้การท่องเที่ยวในจังหวัดอุบลราชธานีเป็นเรื่องง่ายและเข้าถึงได้สำหรับทุกคน
          </p>
        </div>
        <a
          href="https://www.facebook.com/itubrufc/?locale=th_TH"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline cursor-pointer"
        >
          ติดต่อเรา
        </a>
      </div>

      <div className="mt-12 text-center">
        <h1 className="text-3xl font-bold">คณะผู้จัดทำ</h1>
      </div>
      {/* 1 รูปใหญ่ตรงกลาง */}
      <section className="flex justify-center mt-12">
        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30  h-auto">
            {" "}
            {/* Responsive size */}
            <img src={Yosita} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นางสาวโยษิตา ชาชำนาน</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>
      </section>

      {/* 3 รูปในแถวเดียวกัน (เมื่อจอใหญ่) หรือ 1-1-1 (เมื่อจอเล็ก) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-12">
        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30  h-auto">
            <img src={kunakon} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นายคุณากร ภูถาดงา</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30 h-auto">
            <img src={Tana} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นายธนชาติ ธนงศักดิ์</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30 h-auto">
            <img src={Wixa} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นายวิศวชิต กิ่งแสง</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>
      </section>

      {/* อีก 3 รูป (เมื่อจอใหญ่) หรือ 1-1-1 (เมื่อจอเล็ก) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-12 my-20">
        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30 h-auto">
            <img src={Sok} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นายSOK BORAMY SUY</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30 h-auto">
            <img src={Devid} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นายSOVICHEAT CHUM </p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-32  md:w-30 h-auto">
            <img src={Pich} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-xl font-semibold mt-4">นางสาวPICHVOLEAK KUN</p>
          <p className="text-gray-500">นักศึกษาเทคโนโลยีสารสนเทศ</p>
        </div>
      </section>
    </>
  );
}
