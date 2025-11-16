import { Mail, Phone, Map, Linkedin, Instagram, Github, Send } from 'lucide-react'
import React from 'react'
import { cn } from './Utils'

const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(()=>{

        },1500)
    }
  return (
    <>
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='conatiner mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In<span className='text-primary'> Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Do contact me if the entity found my efforts Acknowledgable, Enthusiastic and of Learning attitude aligned with your expectations.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                           <Mail className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <a href='wmansi413@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                wmansi413@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                           <Phone className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:+9179772922" className='text-muted-foreground hover:text-primary transition-colors'>
                                +91-7977002922
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                           <Map className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4>Location</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors'>
                                Mumbai, Maharashtra
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pt-8'>
                    <h4 className='font-medium mb-4'>Connect with me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href='https://www.linkedin.com/in/mansi-waghmare-457b282a5/' target="_blank">
                            <Linkedin/>
                        </a>
                        <a href='https://www.instagram.com/mansiwaghmare_28/' target="_blank">
                            <Instagram/>
                        </a>
                        <a href='https://github.com/mansiwaghmare' target="_blank">
                            <Github/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'>Send a message</h3>
                <form className='space-y-6' onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mjkjjggn">
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium mb-2'>Your Name</label>
                        <input type='text' id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary' placeholder='Enter your name'></input>
                    </div>

                    <div>
                        <label htmlFor='email' className='block text-sm font-medium mb-2'>Your Email ID</label>
                        <input type='email' id='name' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary' placeholder='Enter your email Id'></input>
                    </div>

                    <div>
                        <label htmlFor='message' className='block text-sm font-medium mb-2'>Your Message</label>
                        <textarea type='text' id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none' placeholder="I'd like to talk about...."></textarea>
                    </div>

                    <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2", )}>
                       Send message <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactSection