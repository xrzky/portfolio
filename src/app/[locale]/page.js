import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Skill from "@/components/skill";
import Project from "@/components/project";

export default async function Home() {
  return (
    <div>
        <Hero />
        <Skill />
        <Project />
        <Contact />
    </div>
  );
}
