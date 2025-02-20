import React from "react";
import Card from "../components/Card";

export default function Destinations() {
  return (
    <>
      <section></section>
      <section className="container mx-auto  flex flex-col items-center justify-center gap-8  h-auto px-4">
        <h1 className="text-center text-2xl font-bold py-3">
          The Development of a Website for Promoting Faith-Based Tourism in Ubon
          Ratchathani
        </h1>
        <div className="w-full  md:max-w-auto mx-auto">
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
