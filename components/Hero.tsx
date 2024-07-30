import Link from "next/link";
import React from "react";
import Image from "next/image";
import appStore from "@/public/App Store.png";
import playstore from "@/public/Play Store.png";
import app1 from "@/public/App Single 01.png";
import app2 from "@/public/App Single 02.png";
import dots from "@/public/Dots.svg";
import wave from "@/public/Wave.svg";
const Hero = () => {
  return (
    <main className="relative pt-28 2xl:pt-32 overflow-hidden">
      <section className="flex justify-center gap-x-36 desktop:gap-x-40 2xl:gap-x-36 largesceen:gap-x-0 largesceen:justify-between px-5 lg:px-[1.9rem]x l:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]">
        <div>
          <h1 className="text-white leading-[108.333%] text-5xl xl:text-6xl largesceen:text-7xl tracking-[-2px] font-bold w-[25rem] xl:w-[33.813rem] mb-7">Manage your remote team work</h1>
          <p className="text-white text-base xl:text-[1.188rem] largesceen:text-[1.4rem] leading-[168.421%] tracking-[-0.2px] font-normal opacity-65 w-[20rem] xl:w-[28rem] 2xl:w-[31.25rem]">
            With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.
          </p>
          <Link
            href="/"
            className="bg-red hover:bg-rose-700 transition-colors py-3 lg:py-2 xl:py-3 px-5 lg:px-4 xl:px-10 text-sm xl:text-base 2xl:text-[1.063rem]  text-white font-bold tracking-[-0.5px] rounded-lg mt-7 block w-fit">
            Explore more
          </Link>

          <div className="mt-6 xl:mt-10 2xl:mt-16">
            <p className="text-white text-[0.813rem] font-bold leading-normal tracking-[0.102rem] uppercase">Download our app</p>
            <div className="flex mt-4 2xl:mt-6 gap-x-4">
              <Link href="/">
                <Image src={appStore} alt="appStore" className="w-[7rem] xl:w-[9rem] 2xl:w-[11.5rem] object-cover" />
              </Link>
              <Link href="/">
                <Image src={playstore} alt="playstore" className="w-[7rem] xl:w-[9rem] 2xl:w-[11.5rem] object-cover" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative ">
          <Image
            src={app1}
            alt="app-screenshot"
            priority
            placeholder="blur"
            className="rounded-[0.938rem] h-[32rem] xl:w-[18rem] xl:h-[35rem] desktop:h-[40rem] 2xl:h-[45.967rem] desktop:w-[21.313rem] largesceen:w-[25rem] largesceen:h-[46.967rem] w-auto z-10 relative "
          />
          <Image
            src={app2}
            alt="app-screenshot"
            className="rounded-[0.938rem] absolute bottom-48 largesceen:bottom-32 right-36 largesceen:right-36 h-[14rem] 2xl:h-[12.5rem]  w-auto  largesceen:h-[18.75rem] object-cover largesceen:w-full z-50"
          />

          <div className="w-[19rem] xl:w-[19.25rem] xl:h-[16rem] desktop:h-[20rem] 2xl:h-[28.188rem] largesceen:h-[29.5rem] bg-white bg-opacity-[0.0867] absolute top-20 desktop:top-32 largesceen:top-36 -left-10 xl:right-1 desktop:right-[3.5rem] largesceen:right-32 rounded-xl desktop:rounded-[0.938rem] "></div>

          <Image src={dots} alt="dots" className="absolute -right-7 2xl:-right-10 -top-8 2xl:-top-10 w-[4.688rem] desktop:w-[5.5rem] 2xl:w-auto" />
        </div>
      </section>
      <Image src={wave} alt="wave" className="w-full absolute  bottom-0 largesceen:-bottom-12 right-0 z-50" />
    </main>
  );
};

export default Hero;
