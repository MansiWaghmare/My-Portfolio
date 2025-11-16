import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import StarBackground from "./StarBackground";
import { ThemeToggle } from "./ThemeToggle";

export const Home = () => {
    return(
        <>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
        {/* Footer */}
        </div>
        </>
    )
};