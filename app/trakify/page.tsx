import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export default function page() {
  return (
    <div className=" bg-[url('/Bg.png')] bg-cover bg-center h-screen px-15 py-5 flex flex-col justify-between items-center">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
