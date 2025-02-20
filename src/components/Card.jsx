import React from "react";
import TestOne from "../assets/images/Test One.jpg";
import TestTwo from "../assets/images/Test two.jpg";
import TestThree from "../assets/images/Test three.jpg";

export default function Card() {
  const CardList = [
    {
      img: TestOne,
      title: "Temple1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim?",
    },
    {
      img: TestTwo,
      title: "Temple2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim?",
    },
    {
      img: TestThree,
      title: "Temple3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim?",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 cursor-pointer">
      {CardList.map((cards, id) => (
        <div
          key={id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2"
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
