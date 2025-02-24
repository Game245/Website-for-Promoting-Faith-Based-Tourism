import React from "react";
import Card from "../components/Card";
import { CardList } from "../DataCardList";


export default function Destinations() {
  return (
      <section className="container mx-auto flex flex-col gap-8 mt-5 h-auto p-4 ">
          <h1 className="text-center text-2xl font-bold py-3 ">
            The Development of a Website for Promoting Faith-Based Tourism in
            Ubon Ratchathani
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
          {CardList.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
  );
}

