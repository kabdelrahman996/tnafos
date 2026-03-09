"use client";
import { useState } from "react";
import { HiMiniBars3, HiXMark } from "react-icons/hi2";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ContactButton from "./ContactButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex justify-between px-6 lg:px-15 py-5 items-center bg-white shadow-sm z-[1000]">
      <Logo />

      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="hidden md:block">
        <ContactButton />
      </div>

      <div
        className="text-4xl md:hidden cursor-pointer text-primary z-[1001]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiXMark /> : <HiMiniBars3 />}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;
