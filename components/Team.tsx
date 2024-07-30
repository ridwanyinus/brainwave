import React from "react";
import Image from "next/image";
import rectangle from "@/public/team1.png";
const Team = () => {
  return (
    <main className="pt-28 2xl:pt-32 px-5 lg:px-[1.9rem]x l:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem] relative z-[999]">
      <section>
        <Image src={rectangle} alt="image of team" />
      </section>
    </main>
  );
};

export default Team;
