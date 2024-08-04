"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { pricing } from "@/data/data";
import Link from "next/link";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="350"
      id="pricing"
      className="bg-[#F4F7FA] py-16 lg:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]">
      <h1 className="text-3xl lg:text-4xl xl:text-[40px] desktop:text-5xl largesceen:text-6xl font-bold text-center mx-auto block tracking-[-1.8px] text-dark"> Pricing made easy</h1>
      <p className="block mx-auto text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-opacity-[0.7] w-[80%] xs:w-[20rem] sm:w-[24rem] xl:w-[29.25rem] largesceen:w-[30.3rem] text-center mt-4 lg:mt-8">
        With lots of unique blocks, you can easily build a page easily without any coding.{" "}
      </p>

      <section className="grid grid-cols-2 place-items-center mt-12 sm:mt-20">
        {pricing.map((items, idx: number) => (
          <div key={idx}>
            <p className="font-bold uppercase tracking-[1.625px] text-xs lg:text-sm text-red text-center">{items.plan}</p>
            <h2 className="text-center text-dark font-bold tracking-[-2px] text-4xl sm:text-5xl lg:text-6xl  flex justify-center items-end mt-4 sm:mt-6 mb-8">
              <span className="font-bold text-2xl">$</span> {items.amount} <span className="text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">{items.duration}</span>
            </h2>
            <p className="text-xs small:text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-center mb-6">{items.features1}</p>
            <p className="text-xs small:text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-center mb-6">{items.features2}</p>
            <p className="text-xs small:text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-center mb-6">{items.features3}</p>
            <p className="text-xs small:text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-center mb-6">{items.features4}</p>

            <Link
              href="/"
              className="bg-red hover:bg-dark transition-colors py-2 xl:py-3 px-3 xs:px-5 lg:px-8 xl:px-10 text-sm xl:text-base 2xl:text-[1.063rem]  text-white font-bold tracking-[-0.5px] rounded-md lg:rounded-lg mt-7 block w-fit mx-auto">
              Get Started Now
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Pricing;
