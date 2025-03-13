import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-6 py-6 bg-slate-700 text-white text-center">
      {/* ชื่อเว็บไซต์ & Copyright */}
      <h1 className="text-lg font-bold">
        The Development of a Website for Promoting Faith-Based Tourism in UbonRatchathani.
      </h1>
      <p className="text-sm">&#169; {new Date().getFullYear()} All rights reserved.</p>

      {/* เมนูลิงก์ */}
      <div className="mt-3 flex justify-center gap-6 text-sm">
        <a href="/about" className="hover:underline">เกี่ยวกับเรา</a>
        <a href="/contact" className="hover:underline">ติดต่อเรา</a>
      </div>

      {/* Social Media Icons */}
      <div className="mt-3 flex justify-center gap-4">
        <a href="https://www.facebook.com/itubrufc" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-400" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-2xl hover:text-gray-400" />
        </a>
      </div>

      {/* ที่อยู่หรือข้อมูลติดต่อ */}
      <div className="mt-3 text-xs text-gray-300">
        <p>
          คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏอุบลราชธานี<br />
          ตั้งอยู่ที่เลขที่ 2 ถนนราชธานี ตำบลในเมือง อำเภอเมือง จังหวัดอุบลราชธานี 34000
        </p>
        <p>
          เว็บไซต์: <a href="https://IND-TECH.UBRU.AC.TH" className="underline">IND-TECH.UBRU.AC.TH</a>
        </p>
        <p>
          ติดต่อคณะฯ โทร: 045-352000 ต่อ 1700 | โทรสาร: 045-352088
        </p>
      </div>

      
    </footer>
  );
}

export default Footer;
