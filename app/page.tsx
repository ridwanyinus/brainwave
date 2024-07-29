import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="bg-hero bg-hero2">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
