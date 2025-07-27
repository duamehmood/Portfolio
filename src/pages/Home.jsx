
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WorkExperience from "../components/sections/WorkExperience";
import SkillsSlider from "../components/sections/SkillsSlider";
import RecentProjects from "../components/sections/RecentProjects";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WorkExperience />
      <SkillsSlider />
      <RecentProjects />
      <Services/>
      <Contact/>

    </div>
  )
}

export default Home
