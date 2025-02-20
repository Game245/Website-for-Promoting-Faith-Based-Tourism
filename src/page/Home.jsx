import React from "react";
import Temple from "../assets/images/Temple.png";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <section
        className="relative md:w-full md:min-h-screen h-auto  bg-cover bg-center flex items-center justify-center text-white backdrop-blur-md"
        style={{ backgroundImage: `url(${Temple})` }}
      >
        <div className="absolute inset-0  md:w-full md:h-screen h-auto bg-black/20 backdrop-blur-md "></div>
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
      <section className="container mx-auto  flex flex-col items-center justify-center gap-8 md:h-screen h-auto px-4">
        <h1 className="text-center text-2xl font-bold py-3">
          The Development of a Website for Promoting Faith-Based Tourism in Ubon
          Ratchathani
        </h1>
        <div className="w-full ">
          <Card />
        </div>
      </section>
    </>
  );
}
