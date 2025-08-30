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
    const aboutMe = `Since I was a kid, I have alwayed loved computer graphics, digital arts, and simulations. 
    I started my journey in tech with my bachelor's degree in FinTech major. I always knew I love tech, but here, I have just ensured myself.
    After carefully research, I understood that frontend development was the major where every aspects of my passions are connected together. And, it was true!
    I went to Tehran Institute of Technology. From HTML and CSS, to JavaScript and React.js. We were taught through real-time projects.
    Then, one year later, a startup company in software engineering hired me as a frontend developer. I delivered a veriety of products, including e-commerce, dashboards, landing pages, and custom software architectures.`;

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

          <div className="flex flex-col items-center justify-between gap-16 px-18 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
            <img className='w-md rounded-3xl' src={pic} alt="portfolio pic" ref={picRef} />
            <AnimatedTextLines 
              text={aboutMe}
            />
          </div>
        </div>
    )
}

export default About