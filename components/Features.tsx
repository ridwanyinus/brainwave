import React from "react";
import video from "@/public/video.png";
import Image from "next/image";
import wave from "@/public/Wave 2.svg";
import button from "@/public/Button.svg";
const Features = () => {
  return (
    <section className="py-16 lg:py-20 2xl:py-32 px-5 lg:px-[1.9rem] xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-80 fourk:px-[40rem] xl:mt-20 relative features-bg h-screen">
      <Image src={wave} alt="wave" className="absolute top-0 w-full left-0" />

      <div className=" flex flex-col justify-center items-center ">
        <Image src={video} alt="video-image" className="absolute -top-72 video" />
        <Image src={button} alt="video button" className="absolute -top-10"/>{" "}
      </div>
    </section>
  );
};

export default Features;
