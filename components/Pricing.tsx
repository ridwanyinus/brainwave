import { pricing } from "@/data/data";
import React from "react";

const Pricing = () => {
  return (
    <main className="bg-[#F4F7FA] py-16 lg:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]">
      <h1 className="text-3xl lg:text-4xl xl:text-[40px] desktop:text-5xl largesceen:text-6xl font-bold text-center mx-auto block tracking-[-1.8px] text-dark"> Pricing made easy</h1>
      <p className="block mx-auto text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-opacity-[0.7] w-[80%] xs:w-[20rem] sm:w-[24rem] xl:w-[29.25rem] largesceen:w-[30.3rem] text-center mt-8">
        With lots of unique blocks, you can easily build a page easily without any coding.{" "}
      </p>

      <section className="grid grid-cols-2 place-items-center mt-20">
        {pricing.map((items, idx: number) => (
          <div key={idx}>
            <p className="font-bold uppercase tracking-[1.625px] text-xs lg:text-sm text-red">{items.plan}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Pricing;
