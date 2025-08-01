import React from "react";
import NavBar from "./navBar";

export default function page() {
  return (
    <div className=" bg-[url('/framebg.png')] bg-cover bg-center flex flex-col items-center justify-between h-screen bg-white">
      <NavBar />
    </div>
  );
}
