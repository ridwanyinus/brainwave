import React from "react";
import { how } from "@/data/data";
const HowItWorks = () => {
  return (
    <section className="py-8 lg:py-12 xl:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]">
      <h1 className="text-dark text-3xl lg:text-4xl 2xl:text-5xl largesceen:text-6xl font-bold text-center mx-auto block tracking-[-1.8px] mb-4 largesceen:mb-8">How does it work?</h1>
      <p className="block mx-auto text-sm sm:text-base xl:text-lg 2xl:text-[1.188rem] largesceen:text-xl text-dark tracking-[-0.2px] text-opacity-[0.7] w-[80%] xs:w-[20rem] sm:w-[24rem] xl:w-[29.25rem] largesceen:w-[30.3rem] text-center">
        With lots of unique blocks, you can easily build a page easily without any coding.{" "}
      </p>

      <div className="flex justify-between items-center">
        {how.map((item, idx: number) => (
          <div key={idx} >
            <div>
              <p>{item.number}</p>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
