import React from "react";
import video from "@/public/video.png";
import Image from "next/image";
import wave from "@/public/Wave 2.svg";
import button from "@/public/Button.svg";
import Link from "next/link";
import dot from "@/public/Dots-Feature.svg";
import { features } from "@/data/data";
import Experience from "./Experience";
const Features = () => {
  return (
    <section id="features" className="py-16 lg:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem] xl:mt-20 relative features-bg min-h-screen">
      <Image src={wave} alt="wave" className="absolute top-0 max-lg:w-screen w-full left-0" />

      <div className=" flex flex-col justify-center items-center ">
        <Image
          src={dot}
          alt="dots"
          className="relative -left-28 sm:-left-[14.5rem] md:-left-[17.5rem] lg:-left-[21rem]  hidden md:block sm:-bottom-2 md:-bottom-16 lg:-bottom-10 xl:-bottom-24 2xl:-bottom-36 xl:-left-[26rem] 2xl:-left-[33rem] w-[8rem] lg:w-auto"
        />

        <Image src={video} alt="video-image" priority className="absolute -top-24 sm:-top-40 lg:-top-52 xl:-top-60 2xl:-top-72 video w-[80%] lg:w-[45rem] xl:w-[55rem] 2xl:w-[69.375rem] h-auto" />

        <Link href="https://www.youtube.com" className="absolute -top-10">
          <Image src={button} alt="video button" className="w-[6rem] lg:w-[10rem] 2xl:w-auto  h-auto" />
        </Link>
      </div>

      <main className="pt-28 sm:pt-36 md:pt-32 xl:pt-52 2xl:pt-60 largesceen:pt-[20rem]">
        <h1 className="text-white text-3xl lg:text-4xl xl:text-[40px] desktop:text-5xl largesceen:text-6xl font-bold text-center mx-auto block tracking-[-1.8px]  xs:w-[20rem] sm:w-[23rem] lg:w-[28rem] xl:w-[33rem] desktop:w-[35rem] 2xl:w-[34rem] largesceen:w-[39.375rem]">
          We made this app to solve your problems.
        </h1>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center mt-12 sm:mt-20 xl:mt-28 2xl:mt-36 gap-y-16">
          {features.map((items, idx: number) => (
            <div key={idx} className="flex flex-col gap-y-2 sm:gap-y-6 desktop:gap-y-8 relative">
              <Image src={items.img} alt="features" className="absolute -left-10 desktop:-left-16 w-7 md:w-[2rem] desktop:w-auto" />
              <h3 className="text-white tracking-[-0.5px]  leading-[168.421%] text-sm xl:text-base  desktop:text-lg largesceen:text-xl fourk:text-2xl">{items.title}</h3>
              <p className="w-[13rem] sm:w-[13rem] lg:w-[15rem] xl:w-[18rem] largesceen:w-[20.188rem]  text-white text-opacity-[0.65] text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">
                {items.text}
              </p>
            </div>
          ))}
        </section>
      </main>
      <div className="line mx-auto block my-10 sm:my-16 lg:my-20"></div>

      <Experience />
    </section>
  );
};

export default Features;
