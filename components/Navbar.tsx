"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { NavItem, navItems } from "@/data/data";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="pt-6 px-5 lg:px-[1.9rem] xl:px-10 desktop:px-12 fourk:px-60  w-full relative z-10">
      <section className="flex justify-between items-center">
        <Link href="/" className="text-white text-2xl 2xl:text-[1.75rem] logo relative z-[999]">
          Brainwave.io
        </Link>

        <div className="flex space-x-8 xl:space-x-12 items-center max-lg:hidden">
          {navItems.map((items, idx: number) => (
            <ul key={idx}>
              <li>
                <Link
                  href={items.link}
                  className="text-white opacity-100  hover:opacity-95 transition-all hover:border-b border-green text-sm xl:text-[0.938rem] tracking-[-0.1px] font-bold leading-normal text-right">
                  {items.name}
                </Link>
              </li>
            </ul>
          ))}

          <Link href="/" className="bg-red  hover:bg-rose-700 transition-colors py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base 2xl:text-[1.063rem]  text-white font-bold tracking-[-0.5px] rounded-lg ">
            Get Started Now
          </Link>
        </div>

        {/* Mobile navbar */}

        <div className="lg:hidden">
          {toggleMenu ? (
            <IoClose size={30} color="#FFFFFF" onClick={() => setToggleMenu(false)} className="relative z-10" />
          ) : (
            <FaBarsStaggered size={30} color="#FFFFFF" onClick={() => setToggleMenu(true)} className="relative z-10" />
          )}

          {toggleMenu && (
            <div className="bg-hero">
              <div className="absolute overflow-hidden w-52 sm:w-60 h-screen right-0  top-0  scale-up-hor-right transition-all pt-28  ">
                {navItems.map((item, idx: number) => (
                  <ul key={`link=${idx}`}>
                    <li className="py-1 mb-4">
                      <Link href={item.link} className="text-2xl small:text-3xl transition-all text-right leading-normal text-white font-semibold ">
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                ))}
                <div className="mt-8">
                  {" "}
                  <Link
                    href="/"
                    className="bg-red hover:bg-opacity-90 transition-colors py-3 lg:py-2 xl:py-3 px-5 lg:px-4 xl:px-6 text-sm xl:text-base 2xl:text-[1.063rem]  text-white font-bold tracking-[-0.5px] rounded-lg">
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
