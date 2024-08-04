"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { navItems } from "@/data/data";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <nav className={`${scroll ? "is-sticky" : ""} pt-6 px-5 lg:px-[1.9rem] xl:px-10 desktop:px-12 fourk:px-60  w-full relative z-[999]`}>
      <section className="flex justify-between items-center">
        <Link href="/" className="text-white text-2xl 2xl:text-[1.75rem] logo relative z-[999]">
          Brainwave.io
        </Link>

        <div className="flex space-x-8 xl:space-x-12 items-center max-lg:hidden">
          {navItems.map((items, idx: number) => (
            <ul key={`link=${idx}`}>
              <li>
                <Link
                  href={items.link}
                  className="text-white opacity-100  hover:opacity-95 transition-all hover:border-b border-green text-sm xl:text-[0.938rem] tracking-[-0.1px] font-bold leading-normal text-right ${
                    ">
                  {items.name}
                </Link>
              </li>
            </ul>
          ))}

          <Link
            href="/"
            className="bg-red stick hover:bg-rose-700 transition-colors py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base 2xl:text-[1.063rem]  text-white font-bold tracking-[-0.5px] rounded-lg ">
            Get Started Now
          </Link>
        </div>

        {/* Mobile navbar */}

        {/* Mobile navbar */}

        <div className="lg:hidden z-[995]">
          {toggleMenu ? (
            <IoClose size={30} color="#FFFFFF" onClick={() => setToggleMenu(false)} className="relative z-10 cursor-pointer" />
          ) : (
            <FaBarsStaggered size={30} onClick={() => setToggleMenu(true)} className="svg text-white relative z-10 cursor-pointer" />
          )}

          {toggleMenu && (
            <div className="fixed top-0 right-0 w-full h-screen  overflow-hidden ">
              <div className="flex flex-col justify-start bg-hero items-start w-full h-full pt-28 px-12 md:px-20 transition-transform transform scale-up-hor-right">
                {navItems.map((item, idx) => (
                  <ul key={idx} className="mb-4">
                    <li className="py-1">
                      <Link href={item.link} className="text-2xl small:text-3xl transition-all text-center text-white font-semibold">
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                ))}
                <div className="mt-8">
                  <Link
                    href="/"
                    className="bg-red hover:bg-opacity-90 transition-colors py-3 lg:py-2 xl:py-3 px-5 lg:px-4 xl:px-6 text-sm xl:text-base 2xl:text-[1.063rem] text-white font-bold tracking-[-0.5px] rounded-lg">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
