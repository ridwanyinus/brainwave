import React from "react";
import Image from "next/image";
import rectangle from "@/public/team1.png";
import dots from "@/public/Dots.svg";

import team2 from "@/public/team2.png";
import team3 from "@/public/team3.png";
import team4 from "@/public/team4.png";
import team5 from "@/public/team5.png";
import team6 from "@/public/team6.png";
import team7 from "@/public/team7.png";
import team8 from "@/public/team8.png";

const Team = () => {
  return (
    <main className="py-28 2xl:py-32 px-5 lg:px-[1.9rem]x l:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem]  flex flex-col lg:flex-row justify-center gap-x-36 desktop:gap-x-56 2xl:gap-x-72 largesceen:gap-x-96 items-center mt-20 ">
      <section className="relative">
        <Image src={rectangle} alt="image of team" className="rounded-[0.625rem] w-[15.5rem] largesceen:w-[20.5rem] h-auto object-cover relative z-10" />

        <Image src={dots} alt="dots" className="absolute -left-12 largesceen:-left-14 bottom-16 largesceen:bottom-24 largesceen:h-[9rem] w-auto   largesceen:object-fill bg-no-repeat" />

        <div className="team_rectangle w-[13.375rem] largesceen:w-[17rem] h-[11.25rem] largesceen:h-[13rem] absolute -bottom-20 -right-12"></div>

        <div>
          <Image
            src={team2}
            alt="team members"
            className="team-bs absolute rounded-[0.625rem] -left-[5.5rem] largesceen:-left-[7.5rem] -top-8 largesceen:-top-12 w-[4.438rem] largesceen:w-[6rem] h-auto"
          />

          <Image src={team3} alt="team members" className="team-bs absolute rounded-[0.625rem] right-20 largesceen:right-28 -top-28 largesceen:-top-36 w-[5.5rem] largesceen:w-[7.438rem] h-auto" />

          <Image
            src={team4}
            alt="team members"
            className="team-bs absolute rounded-[0.625rem] -right-[6rem] largesceen:-right-[8.5rem] -top-8 largesceen:-top-14 w-[5rem] largesceen:w-[7rem] h-auto"
          />

          <Image
            src={team5}
            alt="team members"
            className="team-bs absolute rounded-[0.625rem] -right-[5.8rem] largesceen:-right-[8rem] top-32 largesceen:top-44 w-[4.438rem] largesceen:w-[6rem] h-auto"
          />

          <Image src={team6} alt="team members" className="team-bs absolute rounded-[0.625rem] right-[2rem] -bottom-10 w-[4.313rem] largesceen:w-[5.5rem] h-auto z-10" />

          <Image
            src={team7}
            alt="team members"
            className="team-bs absolute rounded-[0.625rem] right-36 largesceen:right-44 -bottom-[7.5rem] largesceen:-bottom-40 w-[5rem] largesceen:w-[7rem] h-auto "
          />

          <Image
            src={team8}
            alt="team members"
            className="team-bs absolute rounded-[0.625rem] -left-28 largesceen:-left-40 -bottom-10 largesceen:-bottom-12 w-[5.938rem] largesceen:w-[8rem] h-auto "
          />
        </div>
      </section>

      <section>
        <h1 className="text-dark text-3xl xl:text-4xl 2xl:text-5xl largesceen:text-6xl font-bold w-[15rem] xl:w-[20rem] 2xl:w-[23.438rem] largesceen:w-[29rem] tracking-[-1.8px] leading-[120.833%] mb-2 lg:mb-4 fourk:mb-6">
          Collaborate with team members.
        </h1>
        <p className="w-[16rem] md:w-[20rem]  xl:w-[24rem] 2xl:w-[23.438rem]  text-dark text-opacity-[0.7] font-normal tracking-[-0.2px]  leading-[168.421%] text-sm xl:text-base  desktop:text-lg largesceen:text-xl fourk:text-2xl mb-4 lg:mb-6 2xl:mb-8 fourk:mb-10">
          We share common trends and strategies for improving your rental income.
        </p>

        <h3 className="text-xl xl:text-2xl fourk:text-3xl text-dark font-bold tracking-[-0.5px] mb-2 desktop:mb-4">Project Based Groups</h3>
        <p className="w-[15rem] xl:w-[21.188rem]  text-dark text-opacity-[0.7] text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">
          With lots of unique blocks, you can easily build a page without coding.{" "}
        </p>

        <h3 className="text-xl xl:text-2xl fourk:text-3xl text-dark font-bold tracking-[-0.5px] mb-2 desktop:mb-4 mt-4 lg:mt-6">Unlimited Video Meetings</h3>
        <p className="w-[15rem] xl:w-[21.188rem]  text-dark text-opacity-[0.7] text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">
          With lots of unique blocks, you can easily build a page without coding.{" "}
        </p>
      </section>
    </main>
  );
};

export default Team;
