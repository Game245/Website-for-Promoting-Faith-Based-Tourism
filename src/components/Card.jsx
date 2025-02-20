import React from "react";
import TestOne from "../assets/images/Test One.jpg";
import TestTwo from "../assets/images/Test two.jpg";
import TestThree from "../assets/images/Test three.jpg";

export default function Card() {
  const CardList = [
    {
      img: TestOne,
      title: "วัดสารพัดนึก",
      description:
        "เป็นสถานที่ที่มีความเชื่อในเรื่องการขอพรในหลากหลายด้าน ตามความต้องการของผู้ที่มาขอพร โดยคำว่า “สารพัดนึก” ในชื่อวัดเองก็มาจากการที่สามารถขอพรได้ทุกเรื่องที่ผู้คนคิดถึงหรือมีความต้องการโดยโบราณสถานและโบราณวัตถุที่สำคัญ ได้แก่ พระเกสรดอกไม้ พระพุทธรูปไม้ปางมารวิชัยรูปหล่อพระบูรพาจารย์ กุฏิราษฎร์พิทักษ์สีนุสรณ์ คำภีร์ใบลาน",
    },
    {
      img: TestTwo,
      title: "วัดมหาวนาราม (วัดป่าใหญ่)",
      description:
        "เป็นพระอารามหลวงแห่งแรกในจังหวัดอุบลราชธานี ซึ่งมีความสำคัญทางประวัติศาสตร์และศาสนาอย่างยิ่งเป็นสถานที่ศักดิ์สิทธิ์ที่ได้รับความนิยมจากผู้ที่มีความเชื่อในเรื่องโชคลาภและการเสริมดวงชะตา หรือ ”สายมู”โดยเฉพาะในการขอพรเรื่องการงาน การเงิน สุขภาพ และความรัก ผู้ที่มาที่วัดมักขอพรให้การงานเจริญรุ่งเรืองความสำเร็จในธุรกิจ หรือการศึกษา รวมถึงขอให้ชีวิตมีความสุขและไร้โรคภัยไข้เจ็บ วัดป่าใหญ่เป็นสถานที่สงบที่เหมาะสำหรับการนั่งสมาธิและเสริมศรัทธา ช่วยเสริมดวงและจิตใจให้ดีขึ้น",
    },
    {
      img: TestThree,
      title: "วัดพระธาตุหนองบัว",
      description:
        "เป็นวัดที่มีชื่อเสียงและมีความสำคัญอย่างยิ่งในด้านศาสนาและวัฒนธรรมของจังหวัดมีสถาปัตยกรรมที่งดงามและน่าสนใจ โดยเฉพาะ “พระธาตุเจดีย์ศรีมหาโพธิ์” ซึ่งเป็นพระธาตุที่มีความสำคัญและเป็นศูนย์รวมจิตใจของผู้ที่มีความเชื่อในศาสนาพุทธ",
    },
  ];
  return (
    <div className="grid grid-cols-1 h-auto md:grid-cols-3 gap-6 p-6 max-w-auto cursor-pointer">
      {CardList.map((cards, id) => (
        <div
          key={id}
          className="bg-white md:w-96 max-w-auto shadow-lg rounded-lg  overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2"
        >
          <div className="overflow-hidden">
            <img
              src={cards.img}
              alt={cards.title}
              className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold">{cards.title}</h1>
            <p className="text-sm text-gray-600 mt-2">{cards.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
