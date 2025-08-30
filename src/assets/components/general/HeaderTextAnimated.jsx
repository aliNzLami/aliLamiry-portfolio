import React, { useRef } from 'react'
import AnimatedTextLines from './AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function HeaderTextAnimated({description, header, subHeader, color, hasScroll = false, subHeaderClassName = "", duration = 4}) {
    const contextRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: hasScroll ? {
            trigger: contextRef.current,
            start: 'top bottom',
            toggleActions: "play none none reverse", 
          } : undefined
        });
        tl.from(contextRef.current, {
          y: '50vh',
          duration: duration,
          ease: 'circ.out'
        })
        tl.from(headerRef.current, {
          opacity: 0,
          y: '20%',
          duration: duration,
          ease: 'circ.out' 
        }, '<+0.2')
    }, [])

    return (
        <div ref={contextRef}>
            <div> {/* style polygon */}
                <div ref={headerRef} className='flex flex-col justify-center gap-12 pt-10 sm:gap-16'>
                  <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${color} ${subHeaderClassName}`}>
                    { subHeader }
                  </p>
                  <div className="px-10">
                    <h1 className={`flex flex-col flex-wrap gap-12 ${color} uppercase banner-text-responsive md:block sm:gap-16`}>
                      { header }
                    </h1>
                  </div>
                </div>
              </div>

              <div className={`relative px-10 ${color}`}>
                <div className="inset-x-0 border-t-5">
                  <div className='py-12 sm:py-16 text-end'>
                    <AnimatedTextLines text={description} className={`font-light value-text-responsive px-[20px] ${color}`} />
                  </div>
                </div>
              </div>
        </div>
    )
}

export default HeaderTextAnimated