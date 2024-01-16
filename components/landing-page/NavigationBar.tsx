"use client";
import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" py-7 px-10 flex justify-between items-center  z-50 w-full shadow-lg">
      <Link href='/' className="text-green-400 font-semibold text-xl"><span className="text-black">Muhammad</span> zaky raihan</Link>
      <div className="hidden md:flex gap-5">
          <Link href='/about' className="text-black text-xl font-semibold hover:-translate-y-1 transition cursor-pointer hover:text-green-400 hover-underline">Home</Link>
        <Link href="/about">
          <h1 className="text-black text-xl font-semibold hover:-translate-y-1 transition cursor-pointer hover:text-green-400 hover-underline">Services</h1>
        </Link>
        <Link href="/skills">
          <h1 className="text-black text-xl font-semibold hover:-translate-y-1 transition cursor-pointer hover:text-green-400 hover-underline">About Us</h1>
        </Link>
      </div>
      <div className="md:hidden flex space-x-4">
        <button className="text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0  ease-in bg-green-400 px-20 rounded-l-lg py-4  mt-10 flex flex-col items-center space-y-2 transform translate-x-0 transition-transform">
          <div className="">
            <Link href="/">
              <h1 className="text-white mb-3 text-xl">Home</h1>
            </Link>
            <Link href="/about">
              <h1 className="text-white mb-3 text-xl">Services</h1>
            </Link>
            <Link href="/skills">
              <h1 className="text-white mb-3 text-xl">About Us</h1>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
