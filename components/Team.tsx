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
import app from "@/public/App 02.png";
import app_content from "@/public/app-content.png";
import app_contect_dot from "@/public/Group 101.svg";
import oval_team1 from "@/public/Ovalteam1.svg";
import oval_team2 from "@/public/Ovalteam2.svg";
import oval_team3 from "@/public/Ovalteam3.svg";
const Team = () => {
  return (
    <main className="py-16 lg:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem] xl:mt-20">
      <div className=" flex flex-col-reverse lg:flex-row justify-center lg:gap-x-44 xl:gap-x-56 2xl:gap-x-72 largesceen:gap-x-96 items-center">
        <section className="relative">
          <Image src={rectangle} alt="image of team" className="rounded-[0.625rem] w-[9rem] xs:w-[10rem] sm:w-[12rem] xl:w-[15.5rem] largesceen:w-[20.5rem] h-auto object-cover relative z-10" />

          <Image
            src={dots}
            alt="dots"
            className="absolute -left-8 xl:-left-12 largesceen:-left-14 bottom-10 sm:bottom-16 xl:bottom-20 largesceen:bottom-24 h-[4.5rem] xs:h-[5rem] xl:h-[7rem] largesceen:h-[9rem] w-auto largesceen:object-fill bg-no-repeat"
          />

          <div className="team_rectangle w-[13.375rem] largesceen:w-[17rem] h-[11.25rem] largesceen:h-[13rem] absolute -bottom-20 -right-12"></div>

          <div>
            <Image
              src={team2}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] -left-14 sm:-left-[4.2rem] xl:-left-[5.5rem] largesceen:-left-[7.5rem] -top-6 sm:-top-8 largesceen:-top-12 w-[3rem] sm:w-[3.438rem] xl:w-[4.438rem] largesceen:w-[6rem] h-auto"
            />

            <Image
              src={team3}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] right-16 xl:right-20 largesceen:right-28 -top-[4.5rem] sm:-top-20 xl:-top-28 largesceen:-top-36 w-14 sm:w-16 xl:w-[5.5rem] largesceen:w-[7.438rem] h-auto"
            />

            <Image
              src={team4}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] -right-16 sm:-right-[4.7rem] xl:-right-[6rem] largesceen:-right-[8.5rem] -top-8 largesceen:-top-14 w-[3rem] sm:w-[3.8rem] xl:w-[5rem] largesceen:w-[7rem] h-auto"
            />

            <Image
              src={team5}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] -right-16 sm:-right-[4.7rem] xl:-right-[5.8rem] largesceen:-right-[8rem] top-20 sm:top-32 largesceen:top-44 w-[3rem] sm:w-[3.438rem] xl:w-[4.438rem] largesceen:w-[6rem] h-auto"
            />

            <Image
              src={team6}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] right-4 sm:right-5 xl:right-[2rem] -bottom-8 sm:-bottom-6 xl:-bottom-10 w-[3rem] sm:w-[3.313rem] xl:w-[4.313rem] largesceen:w-[5.5rem] h-auto z-10"
            />

            <Image
              src={team7}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] right-24 sm:right-28 xl:right-36 largesceen:right-44 -bottom-20 lg:-bottom-[5.5rem] xl:-bottom-[7.5rem] largesceen:-bottom-40 w-[3rem] sm:w-[3.8rem] xl:w-[5rem] largesceen:w-[7rem] h-auto "
            />

            <Image
              src={team8}
              alt="team members"
              className="team-bs absolute rounded-[0.625rem] -left-[4.5rem] sm:-left-24 xl:-left-28 largesceen:-left-40 -bottom-8 sm:-bottom-10 largesceen:-bottom-12 w-[3.9rem] sm:w-[4.938rem] xl:w-[5.938rem] largesceen:w-[8rem] h-auto "
            />
          </div>
        </section>

        <section className="max-lg:pb-32">
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
      </div>

      <section className="py-16 lg:py-20 2xl:py-32  xl:mt-20 largesceen:mt-28 flex flex-col lg:flex-row justify-center lg:gap-x-44 xl:gap-x-56 2xl:gap-x-72 largesceen:gap-x-96 items-center">
        <section className="max-lg:py-16">
          <h1 className="text-dark text-3xl xl:text-4xl 2xl:text-5xl largesceen:text-6xl font-bold w-[15rem] xl:w-[20rem] 2xl:w-[23.438rem] largesceen:w-[32rem] tracking-[-1.8px] leading-[120.833%] mb-2 lg:mb-4 fourk:mb-6">
            Organize remote team fast & easily.
          </h1>
          <p className="w-[16rem] md:w-[20rem]  xl:w-[24rem] 2xl:w-[23.438rem]  text-dark text-opacity-[0.7] font-normal tracking-[-0.2px]  leading-[168.421%] text-sm xl:text-base  desktop:text-lg largesceen:text-xl fourk:text-2xl mb-4 lg:mb-6 2xl:mb-8 fourk:mb-10">
            We share common trends and strategies for improving your rental income.
          </p>

          <h3 className="text-xl xl:text-2xl fourk:text-3xl text-dark font-bold tracking-[-0.5px] mb-2 desktop:mb-4">Create Unlimited Teams</h3>
          <p className="w-[15rem] xl:w-[21.188rem]  text-dark text-opacity-[0.7] text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">
            With lots of unique blocks, you can easily build a page without coding.{" "}
          </p>

          <h3 className="text-xl xl:text-2xl fourk:text-3xl text-dark font-bold tracking-[-0.5px] mb-2 desktop:mb-4 mt-4 lg:mt-6">Hasslefree Chat with Everyone</h3>
          <p className="w-[15rem] xl:w-[21.188rem]  text-dark text-opacity-[0.7] text-xs xl:text-base  largesceen:text-lg fourk:text-xl leading-[170.588%]">
            With lots of unique blocks, you can easily build a page without coding.{" "}
          </p>
        </section>

        <section className="relative mt-2 sm:mt-4 lg:mt-0">
          <Image src={app} alt="app" className="rounded-lg sm:rounded-[0.938rem] app2 h-[22rem] sm:h-[28rem] desktop:h-[31.375rem]  largesceen:h-full w-[14rem] xs:w-[16.125rem] largesceen:w-[17.5rem] z-10 relative" />
          <Image src={app_content} alt="app" className="absolute -left-8 xs:-left-10 sm:-left-28 lg:-left-[10rem] top-12 desktop:top-20 largesceen:top-24 app2-content w-[8rem] lg:w-[12.313rem] largesceen:w-[13rem] z-20" />

          <div className="z-20 app-content_general w-[7rem] sm:w-[8rem] lg:w-[10rem] largesceen:w-[11.875rem] h-[7rem] sm:h-[8rem] lg:h-[10rem] largesceen:h-[11.875rem] absolute bottom-12 sm:bottom-28 desktop:bottom-32 largesceen:bottom-[10.3rem] -left-10 sm:-left-16 flex flex-col justify-center items-center">
            <div className="flex relative justify-center items-center">
              <Image src={oval_team1} alt="team " className="translate-x-2 lg:translate-x-4 w-8 lg:w-auto" />
              <Image src={oval_team2} alt="team" className="z-10 w-8 lg:w-auto " />
              <Image src={oval_team3} alt="team" className="-translate-x-2 lg:-translate-x-4 w-8 lg:w-auto" />
            </div>

            <h3 className="text-white text-base lg:text-lg 2xl:text-[1.188rem] font-bold tracking-[-0.2px] mt-4">General</h3>

            <p className="text-white text-opacity-[0.7056] font-medium text-xs lg:text-sm">46 Members</p>
          </div>

          <div>
            <Image src={app_contect_dot} alt="dots" className="max-xs:hidden absolute bottom-4 sm:bottom-20 lg:bottom-10 desktop:bottom-20 largesceen:bottom-32 -left-[5.2rem] sm:-left-[7.5rem] h-[3rem] sm:h-[4rem] lg:h-[8.688rem] desktop:h-auto" />
            <div className="app-content_bg absolute -top-4 sm:-top-8 -right-5 sm:-right-8 h-[13.5rem] largesceen:h-60 w-[10.938rem] largesceen:w-48 "></div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Team;
