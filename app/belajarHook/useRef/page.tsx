"use client";
import { useEffect, useState, useRef } from "react";
import InputText from "@/app/components/InputText";
import Button from "@/app/components/Button";

const Home = () => {
  const targetAbout = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    console.log("target about", targetAbout);
    targetAbout.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scroll = () => {
    if (targetAbout.current) {
      const node = document.createElement("div");
      node.className = "text-white bg-red-500 p-2";
      const textNode = document.createTextNode("selamat datang");
      node.appendChild(textNode);
      targetAbout.current.appendChild(node);

      // Menambahkan event listener untuk mouse keluar
    }
  };

  return (
    <section className="h-screen w-screen">
      <nav className="h-[50px]">
        <Button
          //   onClick={scrollToHome}
          colorSchema="blue"
          variant="solid"
          title="Home"
        />
        <Button
          //   onClick={scrollToContent}
          colorSchema="red"
          variant="solid"
          title="Content"
        />
        <Button
          onClick={scrollToAbout}
          colorSchema="green"
          variant="solid"
          title="About"
        />
      </nav>
      <section className="h-[90%] overflow-auto">
        <div className="min-h-screen bg-red-500 flex items-center justify-center">
          <h1 className="text-white">Home</h1>
        </div>
        <div className="min-h-screen bg-blue-500 flex items-center justify-center">
          <h1 className="text-white">Content </h1>
        </div>
        <div
          onMouseEnter={scroll}
          ref={targetAbout}
          className="min-h-screen bg-yellow-500 flex items-center justify-center"
        >
          <h1 className="text-white">About </h1>
        </div>
      </section>
    </section>
  );
};

export default Home;
