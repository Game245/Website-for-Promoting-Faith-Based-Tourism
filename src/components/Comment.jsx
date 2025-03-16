import React, { useState } from "react";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [menuIndex, setMenuIndex] = useState(null);
  const [confirmAction, setConfirmAction] = useState(null);

  // เพิ่มความคิดเห็น
  const addComment = () => {
    if (text.trim() === "") return;
    const newComment = {
      text,
      date: new Date().toLocaleDateString("th-TH"),
      time: new Date().toLocaleTimeString("th-TH"),
    };
    setComments([...comments, newComment]);
    setText("");
  };

  // เริ่มแก้ไข
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditText(comments[index].text);
    setMenuIndex(null);
  };

  // บันทึกการแก้ไข
  const saveEdit = () => {
    const updatedComments = [...comments];
    updatedComments[editingIndex].text = editText;
    setComments(updatedComments);
    setEditingIndex(null);
    setConfirmAction(null);
  };

  // ลบความคิดเห็น
  const deleteComment = () => {
    setComments(comments.filter((_, i) => i !== confirmAction));
    setConfirmAction(null);
  };

  return (
    <section className="mt-8 mx-auto p-4  shadow-md rounded-lg w-full bg-[#B22222]">
      <h2 className="text-2xl font-semibold mb-4">ความคิดเห็น</h2>
      
      {/* ฟอร์มเขียนความคิดเห็น */}
      <textarea
        className="w-full p-2 mb-4 border rounded-lg focus:ring focus:ring-blue-500 text-white placeholder:text-white"
        rows="4"
        placeholder="เขียนความคิดเห็น..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
        onClick={addComment}
      >
        ส่งความคิดเห็น
      </button>

      {/* แสดงความคิดเห็น */}
      <div className="mt-6">
        {comments.length === 0 ? (
          <p className="text-white">ยังไม่มีความคิดเห็น</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg mb-4 relative">
              {editingIndex === index ? (
                // โหมดแก้ไข
                <>
                  <textarea
                    className="w-full p-2 mb-2 border rounded-lg"
                    rows="3"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  ></textarea>
                  <button
                    className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => setConfirmAction("edit")}
                  >
                    บันทึก
                  </button>
                  <button
                    className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                    onClick={() => setEditingIndex(null)}
                  >
                    ยกเลิก
                  </button>
                </>
              ) : (
                // โหมดปกติ
                <>
                  <p className="text-gray-800">{comment.text}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    โพสต์เมื่อ {comment.date} เวลา {comment.time}
                  </p>

                  {/* ปุ่มจุดสามจุด */}
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={() => setMenuIndex(index)}
                  >
                    ⋮
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Popup เมนูตัวเลือก (แก้ไข / ลบ) */}
      {menuIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4">จัดการความคิดเห็น</h3>
            <button
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => {
                startEdit(menuIndex);
                setMenuIndex(null);
              }}
            >
              ✏️ แก้ไข
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              onClick={() => {
                setConfirmAction(menuIndex);
                setMenuIndex(null);
              }}
            >
              🗑️ ลบ
            </button>
            <button
              className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
              onClick={() => setMenuIndex(null)}
            >
              ปิด
            </button>
          </div>
        </div>
      )}

      {/* Popup ยืนยันการลบ */}
      {typeof confirmAction === "number" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">คุณแน่ใจหรือไม่ว่าต้องการลบความคิดเห็นนี้?</p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={deleteComment}
              >
                ลบ
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setConfirmAction(null)}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup ยืนยันการแก้ไข */}
      {confirmAction === "edit" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">คุณต้องการบันทึกการแก้ไขนี้หรือไม่?</p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={saveEdit}
              >
                บันทึก
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setConfirmAction(null)}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
