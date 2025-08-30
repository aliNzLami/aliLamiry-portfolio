import React, { useRef } from 'react'

// pic
import pic from "../../pics/me.png"

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// components
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated';
import AnimatedTextLines from '../../components/general/AnimatedTextLines';


function About() {

  // ---------------------- Ref ---------------------- //
    const picRef = useRef(null);
    const aboutRef = useRef(null);

  // ---------------------- Variables ---------------------- //
    const aboutMe = `Since a young age, I have been passionate about computer graphics, digital arts, and simulations. I earned a bachelor's in FinTech, which solidified my love for technology. 
    I discovered that frontend development combines my passions for creativity, design, and tech. 
    At Tehran Institute of Technology, I gained hands-on experience with HTML, CSS, JavaScript, and React.js through real projects.
    Afterward, I worked as a frontend developer at a startup via a cross-functional Agile team, contributing to e-commerce sites, dashboards, landing pages, and custom software architectures.
    I'm eager to create innovative digital experiences and simplify the complexity for the clients.`;

  // ---------------------- Animations ---------------------- //
    useGSAP(() => {
      if(picRef.current) {
        gsap.to(aboutRef.current, {
          scale: 0.95,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'bottom 80%',
            end: "bottom 20%",
            scrub: true
          },
          ease: 'power1.inOut'
        })

        gsap.set(picRef.current, {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(picRef.current, {
          scrollTrigger: { 
            trigger: picRef.current ,
            start: 'top bottom',
            toggleActions: "play none none reverse", 
          },
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 2,
          ease: "power4.out",
        });
      }
    }, [])

    return (
        <div ref={aboutRef} className='min-h-screen bg-black rounded-t-4xl'>
          <HeaderTextAnimated
              subHeader={'who am i?'}
              header={'About Me'}
              description={"Let's see a summary."}
              color={'text-white'}
              hasScroll={true}
              duration={1}
          />

          <div className="flex flex-row items-center justify-between gap-16 px-18 pb-16 text-xl font-light tracking-wide md:text-2xl lg:text-3xl text-white/60 aboutBody">
            <img className='w-md rounded-3xl' src={pic} alt="portfolio pic" ref={picRef} />
            <AnimatedTextLines 
              text={aboutMe}
            />
          </div>
        </div>
    )
}

export default About