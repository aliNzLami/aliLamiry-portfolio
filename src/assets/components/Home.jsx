import React, { useRef } from 'react'
import AnimatedTextLines from './general/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import RenderThree from './general/RenderThree';

function Home() {
    const contextRef = useRef(null);
    const headerRef = useRef(null);

    const whatIDo = `I transfer experiences towards the user by building interfaces. 
    My job is turn complexcity to simplicity. 
    No matter how much the data structures and APIs are complicated, 
    I make comfort and easiness for the users.`

    useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(contextRef.current, {
        y: '50vh',
        duration: 4,
        ease: 'circ.out'
      })
      tl.from(headerRef.current, {
        opacity: 0,
        y: '20%',
        duration: 4,
        ease: 'circ.out' 
      }, '<+0.2')
    }, [])

    return (
        <>

          <figure className='w-[100vw] h-[60vh] star3D pt-40 relative'>
            <RenderThree glb={`pc`} />
              <span className='firstMoon'>🌙</span>
              <span className='secondMoon'>🌕</span>
          </figure>
        
          <div className='flex flex-col justify-end homeHeight'>
            <div ref={contextRef}>
              
              <div> {/* style polygon */}
                <div ref={headerRef} className='flex flex-col justify-center gap-12 pt-10 sm:gap-16'>
                  <p className='text-sm font-light tracking-[0.5rem] uppercase px-10 text-black'>
                    FRONTEND REACT.JS DEVELOPER
                  </p>
                  <div className="px-10">
                    <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive md:block sm:gap-16">
                      Ali Lamiry
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative px-10 text-black">
                <div className="inset-x-0 border-t-5">
                  <div className='py-12 sm:py-16 text-end'>
                    <AnimatedTextLines text={whatIDo} className='font-light value-text-responsive px-[20px]'/>
                  </div>
                </div>
              </div>

            </div>

            
          </div>
        </>
    )
}

export default Home