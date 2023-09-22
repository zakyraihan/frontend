"use client";
import { useRef, useState } from "react";
import Button from "@/app/components/Button";
import useClosure from "@/hook/useClosure";


const Home = () => {
  const {isOpen, onOpen, onClose} = useClosure()

  return (
    <section className="mx-10">
        <div className="">
      <button onClick={onOpen}>Buka Modal</button>
    <div className="bg-red-500 w-[20rem] mt-5">
    {isOpen && (
        <div className="shadow-lg">
          <h2>Ini adalah modal</h2>
          <p>Isi modal di sini.</p>
          <Button colorSchema="blue" variant="solid" title="close" onClick={onClose}/>
        </div>
      )}
      </div>
      </div>
    </section>
  );
};

export default Home;
