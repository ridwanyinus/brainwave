import { footer, social } from "@/data/data";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
const Footer = () => {
  return (
    <main className="py-4 pt-16 lg:pt-20 2xl:pt-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]">
      <section className="grid grid-cols-2 md:grid-cols-4 max-md:gap-y-4 place-items-center items-start justify-start">
        {footer.map((items, idx: number) => (
          <div key={idx}>
            <p className="text-dark text-opacity-[0.7] text-sm xl:text-[0.938rem] largesceen:text-base mb-4 lg:mb-8">{items.title}</p>

            {items.links?.map((link, idx: number) => (
              <div key={idx} className="mb-4">
                <Link href={link.link} className="text-dark text-xs sm:text-sm  lg:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%] tracking-[-0.2px] hover:text-red">
                  {link.name}
                </Link>
              </div>
            ))}
            {items.images?.map((items, idx: number) => (
              <Link href="/" key={idx} className="">
                <Image src={items.img} alt="appStore" className="mb-3 w-[7rem] xl:w-[9rem] 2xl:w-[11.5rem] object-cover" />
              </Link>
            ))}
          </div>
        ))}
      </section>

      <div className="mt-10  sm:mt-16 mb-10 h-[2px] w-[80%] block mx-auto 2xl:w-max-[1111px] bg-[#E7E9ED]"></div>

      <div className="grid  sm:grid-cols-2 place-items-center ">
        <p className="text-dark text-opacity-[0.7] text-xs sm:text-sm xl:text-[0.938rem] text-center mt-4 sm:mt-0 sm:w-[18rem] xl:w-full max-sm:order-1">
          © 2024 Copyright, All Right Reserved, Made by Seju_ui_ux | Designed by <Link href="https://ridwanyinus.is-a.dev">Ridwan</Link>
        </p>

        <div className="flex gap-x-3 ">
          {social.map((item, idx: number) => (
            <div key={idx} className="">
              <Link href="/" className="">
                <item.image className="text-dark hover:text-red text-xl lg:text-2xl desktop:text-3xl " />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Footer;
