import React from "react";
import Temple from "../assets/images/Temple.png";

export default function Header() {
  return (
    <section
      className="relative md:w-full md:min-h-screen h-auto  bg-cover bg-center flex items-center justify-center text-white backdrop-blur-md"
      style={{ backgroundImage: `url(${Temple})` }}
    >
		{/* bg-black/20 backdrop-blur-md */}
      <div className="absolute inset-0  md:w-full md:h-screen h-auto "></div>
      <div className="p-8 rounded-lg text-center  m-auto z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          The Development of a Website for Promoting Faith-Based Tourism in
          UbonRatchathani
        </h1>
        <p className="text-lg mt-4 hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          consequatur, repudiandae dolore quaerat nostrum architecto
          voluptatibus suscipit non eaque enim, ipsa eligendi doloremque
          molestias illo deleniti? Modi autem voluptate recusandae.
        </p>
      </div>
    </section>
  );
}
