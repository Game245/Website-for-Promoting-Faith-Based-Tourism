import React from "react";
import Temple1 from "../assets/images/Cover.jpg";

export default function Header() {
  return (
    <section
      className="max-w-full md:min-h-screen h-auto bg-cover bg-center flex items-center justify-center text-white "
      
    >
      <div className="max-w-full md:h-screen h-auto ">
        <img src={Temple1} />
      </div>
    </section>
  );
}

