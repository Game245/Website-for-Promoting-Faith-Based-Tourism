import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmPopup(true); // แสดงป๊อบอัพยืนยันก่อนส่ง
  };

  const handleConfirmSend = () => {
    setShowConfirmPopup(false);
    setShowResultPopup("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setShowResultPopup(null);
    }, 3000);
  };

  const handleCancelSend = () => {
    setShowConfirmPopup(false);
    setShowResultPopup("cancel");

    setTimeout(() => {
      setShowResultPopup(null);
    }, 3000);
  };

  return (
    <>
      {/* Breadcrumb */}
      <motion.div
        className="container mx-auto px-4 py-3 text-gray-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex items-center gap-2 md:text-sm text-[12px]">
          <Link
            to="/"
            className="flex items-center gap-1 text-blue-500 font-medium hover:underline hover:text-blue-300"
          >
            <FaHome /> หน้าแรก
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">ติดต่อเรา</span>
        </nav>
      </motion.div>

      {/* กล่องเนื้อหา */}
      <motion.div
        className="p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ที่อยู่หรือข้อมูลติดต่อ */}
        <motion.div
          className="mt-3 text-center text-1xl md:text-2xl text-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏอุบลราชธานี
            <br />2 ถนนราชธานี ตำบลในเมือง อำเภอเมือง จังหวัดอุบลราชธานี 34000
          </p>
          <p>
            เว็บไซต์:{" "}
            <a
              href="https://IND-TECH.UBRU.AC.TH"
              className="underline text-blue-600"
            >
              IND-TECH.UBRU.AC.TH
            </a>
          </p>
          <p>โทร: 045-352000 ต่อ 1700 | โทรสาร: 045-352088</p>
        </motion.div>

        {/* ฟอร์มติดต่อ */}
        <motion.form
          className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="ชื่อของคุณ"
            className="w-full p-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="อีเมลของคุณ"
            className="w-full p-2 mb-4 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="ข้อความของคุณ"
            className="w-full p-2 mb-4 border rounded-lg h-32"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ส่งข้อความ
          </motion.button>
        </motion.form>

        {/* Popup ยืนยันส่งข้อความ */}
        {showConfirmPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center w-80"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2"
                onClick={() => setShowConfirmPopup(false)}
              >
                <AiOutlineClose className="text-red-500 text-xl cursor-pointer" />
              </button>
              <h2 className="text-xl font-bold">⚠️ ยืนยันการส่ง</h2>
              <p className="mt-2 text-gray-600">
                คุณต้องการส่งข้อความนี้ใช่ไหม?
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={handleConfirmSend}
                >
                  ✅ ยืนยัน
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={handleCancelSend}
                >
                  ❌ ยกเลิก
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Popup แจ้งผลลัพธ์ */}
        {showResultPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center w-80"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2"
                onClick={() => setShowResultPopup(null)}
              >
                <AiOutlineClose className="text-red-500 text-xl cursor-pointer" />
              </button>
              {showResultPopup === "success" ? (
                <>
                  <h2 className="text-xl font-bold text-green-600">
                    ✅ ส่งข้อความสำเร็จ!
                  </h2>
                  <p className="mt-2 text-gray-600">
                    เราจะติดต่อกลับโดยเร็วที่สุด
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-red-600">
                    ❌ ยกเลิกการส่ง
                  </h2>
                  <p className="mt-2 text-gray-600">
                    ข้อความของคุณยังไม่ถูกส่ง
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* แผนที่ */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2283.105359353489!2d104.84344873026555!3d15.243183365748964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31168879a3121907%3A0x44a73394ddbe5299!2sMaster%20of%20Science%20in%20Engineering%20Technology%2C%20UBRU!5e1!3m2!1sth!2sth!4v1740201359586!5m2!1sth!2sth"
            className="w-full h-96 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </>
  );
}
