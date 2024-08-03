import { experience } from "@/data/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Experience = () => {
  return (
    <main className="">
      <h1 className="text-white font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-[32px] tracking-[-1.2px] leading-[137.5%] mx-auto xs:w-[20rem] sm:w-[30rem] xl:w-[34.375rem] largesceen:w-[40rem]  text-center  largesceen:text-4xl">
        <span className="border-b-4 border-[#68D585] leading-[137.5%] inline-block">1,749 remote teams</span> have shared their experience with our app!
      </h1>

      <section className="mt-20 flex flex-col items-center justify-center ">
        <div className="  w-fit gap-y-8 grid">
          {experience.map((items, idx: number) => (
            <div key={idx} className="flex flex-col sm:flex-row max-sm:py-3 px-6 lg:px-8 sm:h-[10rem] lg:h-[12.438rem] items-center gap-x-8 max-sm:gap-y-4 bg-white rounded-xl border border-[#57595E]">
              <Image src={items.img} alt="avatar" className="w-12 sm:w-20 lg:w-auto" />

              <div className="flex flex-col gap-y-4">
                <p className="text-dark font-normal tracking-[-0.5px]  leading-[152.381%] text-sm sm:text-base lg:text-xl  desktop:text-xl 2xl:text-[1.313rem] fourk:text-2xl sm:w-[20rem] md:w-[25rem] lg:w-[32.5rem]">
                  {items.text}
                </p>
                <p className=" text-dark text-opacity-[0.7] text-xs sm:text-sm  lg:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%] tracking-[-0.2px]">{items.author}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="text-green font-bold text-xs sm:text-sm  lg:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%] tracking-[-0.2px] flex items-center gap-x-3 hover:border-b border-white mt-4 sm:mt-8 hover:opacity-90 transition-colors">
          Read more reviews <FaArrowRight />
        </Link>
      </section>
    </main>
  );
};

export default Experience;
 