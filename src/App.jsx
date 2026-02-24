// import ParticleBackground from "./Component/ParticleBackground";
// import Navbar from "./Component/Navbar";
// import HeroSection from "./Component/Home";
// import AboutSection from "./Component/About";
// import SkillsSection from "./Component/SkillsSection";
// import ProjectsSection from "./Component/ProjectsSection";
// import ContactSection from "./Component/Contect";

// const App = () => {
//   return (
//     <div className="cosmic-gradient min-h-screen relative">
//       <ParticleBackground />
//       <Navbar />
//       <HeroSection />
//       <AboutSection />
//       <SkillsSection />
//       <ProjectsSection />
//       <ContactSection />

//       <footer className="relative z-10 text-center py-8 border-t border-border">
//         <p className="text-muted-foreground text-sm font-body">
//           © 2026 Senthil Kumar. Crafted with passion & code.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Pages from './Components/Pages'
import About from './Components/About'
import DesignSkills from './Components/Skill'
import ExperienceEducation from './Components/Education'
import ContactForm from './Components/ContactForm'
import ScrollToTop from './Components/ScrollTop'
import ProjectCards from './Components/Project/ProjectCard'
import ProjectDetail from './Components/Project/ProjectDetails'
import Footer from './Components/Footer'
import HireMe from './Components/HireMe'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Pages />} />

        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<DesignSkills />} />
        <Route path="/educat" element={<ExperienceEducation />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/project" element={<ProjectCards />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App