import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Skill from '@/components/skill';
import Project from '@/components/project';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Project/>
      <Contact/>
    </div>
  );
}

