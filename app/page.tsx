import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
export default function Home() {
  return (
    <main className="bg-white">
      <section className="bg-hero bg-hero2 relative overflow-hidden">
        <Navbar />
        <Hero />
        <div className="oval absolute -top-[55rem] lg:-top-[54rem] desktop:-top-[52rem] 2xl:-top-[50rem] -left-[53rem] 2xl:-left-[52rem] fourk:-left-[40rem] rounded-full  "></div>

        <div className="oval2 absolute -top-[78rem] sm:-top-[75rem] lg:-top-[74rem] desktop:-top-[70rem] 2xl:-top-[60rem] fourk:-top-[65rem] -left-[72rem] lg:-left-[73rem] 2xl:-left-[70rem] fourk:-left-[55rem] rounded-full  "></div>

        <div className="oval3 absolute -top-[101rem] sm:-top-[100rem] lg:-top-[99rem] desktop:-top-[90rem] 2xl:-top-[75rem] fourk:-top-[85rem] -left-[102rem] lg:-left-[100rem] 2xl:-left-[90rem] fourk:-left-[75rem]"></div>
       
      </section>

      <Team />
    </main>
  );
}
