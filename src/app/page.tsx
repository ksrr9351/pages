import Image from "next/image";
import Hero from "@/components/Hero";
import BusinessGoals from "@/components/businessgoal";
import Guiding from "@/components/Guiding";
import Unlocklimitless from "@/components/unlocklimitless";
import Develop from "@/components/develop";

export default function Home() {
  return (
    <div>
      <Hero />
      <BusinessGoals />
      <Guiding />
      <Unlocklimitless />
      <Develop />
    </div>
  );
}
