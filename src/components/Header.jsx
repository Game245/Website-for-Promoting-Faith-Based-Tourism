import React from "react";
import Temple from "../assets/images/Temple.png";
import Temple1 from "../assets/images/ปก.jpg";

export default function Header() {
  return (
    <section
      className=" md:w-full md:min-h-screen h-auto bg-cover bg-center flex items-center justify-center text-white "
      
    >
      <div className=" inset-0 md:w-full md:h-screen h-auto ">
        <img src={Temple1} />
      </div>
    </section>
  );
}

