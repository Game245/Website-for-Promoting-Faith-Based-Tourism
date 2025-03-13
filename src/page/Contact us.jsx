import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">

      {/* ที่อยู่หรือข้อมูลติดต่อ */}
      <div className="mt-3 text-center text-2xl text-gray-700">
        <p>
          คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏอุบลราชธานี<br />
          2 ถนนราชธานี ตำบลในเมือง อำเภอเมือง จังหวัดอุบลราชธานี 34000
        </p>
        <p>
          เว็บไซต์: <a href="https://IND-TECH.UBRU.AC.TH" className="underline text-blue-600">IND-TECH.UBRU.AC.TH</a>
        </p>
        <p>
          โทร: 045-352000 ต่อ 1700 | โทรสาร: 045-352088
        </p>
      </div>

      {/* ฟอร์มติดต่อ */}
      <form className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <input type="text" placeholder="ชื่อของคุณ" className="w-full p-2 mb-4 border rounded-lg" />
        <input type="email" placeholder="อีเมลของคุณ" className="w-full p-2 mb-4 border rounded-lg" />
        <textarea placeholder="ข้อความของคุณ" className="w-full p-2 mb-4 border rounded-lg h-32"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">ส่งข้อความ</button>
      </form>

      {/* แผนที่ */}
      <div className="mt-6">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2283.105359353489!2d104.84344873026555!3d15.243183365748964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31168879a3121907%3A0x44a73394ddbe5299!2sMaster%20of%20Science%20in%20Engineering%20Technology%2C%20UBRU!5e1!3m2!1sth!2sth!4v1740201359586!5m2!1sth!2sth"
          className="w-full h-96 rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
