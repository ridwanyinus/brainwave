"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { how } from "@/data/data";
const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="350"
      className="py-8 lg:py-12 xl:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem] mb-32 sm:mb-52 lg:mb-72">
      <h1 className="text-dark text-3xl lg:text-4xl 2xl:text-5xl largesceen:text-6xl font-bold text-center mx-auto block tracking-[-1.8px] mb-4 largesceen:mb-8">How does it work?</h1>
      <p className="block mx-auto text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-opacity-[0.7] w-[80%] xs:w-[20rem] sm:w-[24rem] xl:w-[29.25rem] largesceen:w-[30.3rem] text-center">
        With lots of unique blocks, you can easily build a page easily without any coding.{" "}
      </p>

      <div className="flex flex-col sm:flex-row max-sm:gap-y-8 justify-between items-center mt-16">
        {how.map((item, idx: number) => (
          <div key={idx} className="flex flex-col justify-center items-center">
            <div style={{ backgroundColor: item.bgColor }} className={` rounded-full py-2 lg:py-3 px-4 xl:py-4 lg:px-6  mb-8  lg:mb-12 `}>
              <p className="text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">{item.number}</p>
            </div>

            <h3 className="tracking-[-0.2px]  leading-[168.421%] text-sm xl:text-base  desktop:text-lg largesceen:text-xl fourk:text-2xl text-dark font-bold mb-2 lg:mb-4">{item.title}</h3>
            <p className="text-center w-[13rem] sm:w-[10rem] md:w-[13rem] lg:w-[15rem] xl:w-[18rem] desktop:w-[21.188rem]  text-dark text-opacity-[0.7] text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
