import React from "react";
import Image from "next/image";
import rectangle from "@/public/team1.png";

const Team = () => {
  return (
    <main className="py-28 2xl:py-32 px-5 lg:px-[1.9rem]x l:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]  flex flex-col lg:flex-row justify-center gap-x-36 desktop:gap-x-40 2xl:gap-x-36 largesceen:gap-x-48 items-center">
      <section className="">
        <Image src={rectangle} alt="image of team" />
      </section>

      <section>
        <h1
          className="text-dark text-5xl largesceen:text-6xl font-bold w-[23.438rem] largesceen:w-[29rem] tracking-[-1.8px] leading-[120.833%] mb-4
">
          Collaborate with team members.
        </h1>
        <p
          className="largesceen:w-[23.438rem]  text-dark text-opacity-[0.7] font-normal tracking-[-0.2px]  leading-[168.421%] text-xl
 mb-8">
          We share common trends and strategies for improving your rental income.
        </p>

        <h3 className="text-2xl text-dark font-bold tracking-[-0.5px] mb-4">Project Based Groups</h3>
        <p className="w-[21.188rem]  text-dark text-opacity-[0.7] largesceen:text-lg leading-[170.588%]">With lots of unique blocks, you can easily build a page without coding. </p>

        <h3>Project Based Groups</h3>
        <p>With lots of unique blocks, you can easily build a page without coding. </p>
      </section>
    </main>
  );
};

export default Team;
