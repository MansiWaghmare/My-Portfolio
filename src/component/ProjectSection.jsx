import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Pottery Land",
        description: "Step into a world of creativity shaped in clay. Pottery Land offers handcrafted pieces that elevate your everyday living.",
        image: "/Molding the earth into art.png",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        demoURL: "https://pottery-land.netlify.app",
        githubURL: "https://github.com/MansiWaghmare/Pottery-Land/tree/main/Pottery%20Land"
    },
    {
        id: 2,
        title: "Cinema Hall",
        description: "Find any movie in seconds with our powerful search tool. From classics to new releases, everything is at your fingertips.",
        image: "/pot.png",
        tags: ["CSS", "Bootstrap", "ReactJS", "OMDB API"],
        demoURL: "https://heartfelt-florentine-f27339.netlify.app",
        githubURL: "https://github.com/MansiWaghmare/Movie-finder"
    },
    {
        id: 3,
        title: "My Portfolio",
        description: "Crafting creative digital experiences with clean design. Welcome to my portfolio — where ideas come to life and journey behind it",
        image: "/portfolio.png",
        tags: ["ReactJS", "Bootstrap", "TailwindCSS", "JavaScript", "Forms API"],
        demoURL: "#",
        githubURL: "#"
    }
]
const ProjectSection = () => {
  return (
    <>
    <section id="projects" className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>These simple and functional web projects built to practice modern web technologies. It focuses on clean design and smooth user interaction. Created to enhance my coding skills and explore new concepts.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key)=>(
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            {/* <img src="https://via.placeholder.com/300" className="w-full h-full object-cover"/> */}

                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag)=>(
                                    <span className='px-2 py-1 text-xs font-medium  border rounded-full bg-primary/20 text-secondary-foreground'>{tag}</span>
                                ))}
                            </div>
                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a href={project.demoURL} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20}/></a>
                                <a href={project.githubURL} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'><Github size={20}/></a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-12'>
                <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/mansiwaghmare' target="_blank">
                    Check my Github<ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProjectSection