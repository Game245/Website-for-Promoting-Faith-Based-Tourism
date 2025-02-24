import React from "react";
import Card from "../components/Card";
import { CardList } from "../DataCardList";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container mx-auto flex flex-col gap-8 mt-5 h-auto p-4 ">
        <Link to='/destinations'>
          <h1 className="text-center text-2xl font-bold py-3 hover:underline cursor-pointer hover:text-sky-500">
          สถานที่ขอพร
          </h1>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto justify-items-center">
          {CardList.slice(0, 3).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
