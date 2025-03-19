import React from "react";
import TravelMaps from "../assets/images/Maps.png"

function Maps() {
  return (
    <section className="max-w-full md:min-h-screen h-auto bg-cover bg-center flex items-center justify-center text-white ">
      <div className="max-w-full md:h-screen h-auto ">
        <img src={TravelMaps} className=" rounded-lg"/>
      </div>
    </section>
  );
}

export default Maps;
