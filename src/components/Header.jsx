import React from "react";
import Temple from "../assets/images/Temple.png";

export default function Header() {
  return (
    <section
      className="relative md:w-full md:min-h-screen h-auto  bg-cover bg-center flex items-center justify-center text-white backdrop-blur-md"
      style={{ backgroundImage: `url(${Temple})` }}
    >
      {/* bg-black/20 backdrop-blur-md */}
      <div className="absolute inset-0  md:w-full md:h-screen h-auto "></div>
      <div className="p-8 rounded-lg text-center  m-auto z-10">
        <h1 className="text-4xl md:text-6xl text-amber-950 font-bold">
          เว็บไซต์ประชาสัมพันธ์สถานที่ท่องเที่ยวเชิงศรัทธา (สายมู) อุบลราชธานี
        </h1>
        <p className="text-lg mt-4 hidden md:block text-white">
          จังหวัดอุบลราชธานี
          เป็นจังหวัดที่มีประวัติศาสตร์ยาวนานและเป็นศูนย์กลางของพระพุทธศาสนาในภาคตะวันออกเฉียงเหนือของประเทศไทย
          มีวัดที่งดงามและเปี่ยมไปด้วยศิลปะวัฒนธรรมหลายแห่งที่ควรค่าแก่การเยี่ยมชม
          หากนักท่องเที่ยวที่มาเยือนจังหวัดอุบลราชธานี
          ไม่ว่าจะเพื่อชมงานแห่เทียนพรรษาหรือเทศกาลสำคัญอื่น ๆ
          สามารถแวะสักการะวัดต่าง ๆ เพื่อทำบุญ เสริมสิริมงคล
          และชมความงดงามของสถาปัตยกรรมอันทรงคุณค่าได้
        </p>
      </div>
    </section>
  );
}
