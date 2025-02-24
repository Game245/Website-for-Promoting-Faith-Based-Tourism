import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ id, title, img }) {
  return (
    <div className="bg-white md:w-96 w-80 max-w-full mx-auto shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 ease-in-out "
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div>
        <Link
          to={`/destination/${id}`}
          className="mt-4 block text-center text-blue-600 hover:text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          ดูรายละเอียด →
        </Link>
      </div>
    </div>
  );
}
