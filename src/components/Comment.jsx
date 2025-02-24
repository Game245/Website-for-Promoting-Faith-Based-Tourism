import React from "react";

export default function Comment() {
  return (
    <section className="mt-8 mx-auto p-4 bg-gray-100 shadow-md rounded-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">ความคิดเห็น</h2>
      <form>
        <textarea
          className="w-full p-2 mb-4 border rounded-lg focus:ring focus:ring-blue-500"
          rows="4"
          placeholder="เขียนความคิดเห็น..."
          value=""
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
          ส่งความคิดเห็น
        </button>
      </form>
    </section>
  );
}

