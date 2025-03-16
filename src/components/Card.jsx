import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, title, img }) {
  return (
    <div className="bg-white md:w-75 w-80 max-w-full mx-auto shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="max-w-full max-h-screen object-contain"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="mt-4 block text-center cursor-pointer text-blue-600 hover:text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">
        ดูรายละเอียด →
      </div>
    </div>
  );
}

