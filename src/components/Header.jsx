import React from "react";
import Temple from "../assets/images/Temple.png";

export default function Header() {
  return (
    <section
      className="relative md:w-full md:min-h-screen h-screen  bg-cover bg-center flex items-center justify-center text-white backdrop-blur-md"
      style={{ backgroundImage: `url(${Temple})` }}
    >
      {/* bg-black/20 backdrop-blur-md */}
      <div className="absolute inset-0  md:w-full md:h-screen h-auto  bg-blue/2 backdrop-blur-md"></div>
      <div className="p-8 rounded-lg text-center  m-auto z-10">
        <h1 className="text-3xl md:text-[65px] text-black font-bold leading-tight text-center ">
          เว็บไซต์ประชาสัมพันธ์สถานที่ท่องเที่ยวเชิงศรัทธา <span className="text-yellow-400">(สายมู)</span> อุบลราชธานี
        </h1>
        <h3 className="text-lg md:text-1xl mt-4 hidden md:block text-gray-100 leading-relaxed md:px-10   text-center">
          จังหวัดอุบลราชธานี
          เป็นจังหวัดที่มีประวัติศาสตร์ยาวนานและเป็นศูนย์กลางของพระพุทธศาสนาในภาคตะวันออกเฉียงเหนือของประเทศไทย
          <br />
          มีวัดที่งดงามและเปี่ยมไปด้วยศิลปะวัฒนธรรมหลายแห่งที่ควรค่าแก่การเยี่ยมชม
          หากนักท่องเที่ยวที่มาเยือนจังหวัดอุบลราชธานี
          ไม่ว่าจะเพื่อชมงานแห่เทียนพรรษาหรือเทศกาลสำคัญอื่น ๆ
          สามารถแวะสักการะวัดต่าง ๆ เพื่อทำบุญ เสริมสิริมงคล
          และชมความงดงามของสถาปัตยกรรมอันทรงคุณค่าได้
        </h3>
      </div>
    </section>
  );
}
