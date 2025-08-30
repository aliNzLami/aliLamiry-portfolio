import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function AnimatedTextLines({ text, className }) {

    const containerRef = useRef(null);
    const linesRef = useRef([]);
    const lines = text.split("\n").filter((line) => line.trim() !== "");

    useGSAP(() => {
        if(linesRef.current.length) {
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: linesRef.current,
                  start: 'top bottom',
                  toggleActions: "play none none reverse", 
                } 
              });
              tl.from(linesRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "back.out",
              })
        }
    }, [])

    return (
        <div ref={containerRef} className={className}>
            {
                lines.map((line, index) => {
                    return (
                        <span 
                            key={index} 
                            className='block leading-relaxed tracking-wide text-pretty'
                            ref={(element) => linesRef.current[index] = element }
                        >
                            { line }
                        </span>
                    )
                })
            }
        </div>
    )
}

export default AnimatedTextLines