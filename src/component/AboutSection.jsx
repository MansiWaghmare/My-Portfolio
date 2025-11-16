import React from 'react'
import { Briefcase, Code, User} from 'lucide-react';

const AboutSection = () => {
  return (
    <>
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl semi-bold'>Passionate Web Developer and creator</h3>
            <p className='text-muted-foreground'>Enthusiastic and motivated developer with a strong interest in web technologies. Passionate about building clean, responsive, and user-friendly applications. Eager to learn new tools, enhance my skills, and contribute to impactful projects. Driven by creativity, problem-solving, and continuous improvement.</p>
            <p className='text-muted-foreground'>Aspiring developer with a deep enthusiasm for coding and modern web development. Focused on learning, experimenting, and improving through hands-on projects. Skilled in HTML, CSS, JavaScript, and eager to expand into advanced frameworks. Dedicated to growing as a developer and adding value to every team I work with.</p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get in Touch
              </a>
              <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                Download CV
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web development</h4>
                  <p className='text-muted-foreground'>Creating responsive websites and web applications using modern frameworks</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded full bg-primary/10'>
                  <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>B' Tech Graduate</h4>
                  <p className='text-muted-foreground'>Graduated with overall <strong>CGPA - 8.63</strong> from dept: Computer Engineering</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Hobbies</h4>
                  <p className='text-muted-foreground'>Coding, Travelling, Reading, Arts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default AboutSection