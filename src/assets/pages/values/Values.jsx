import React, { useRef } from 'react'
import ValuesItems from './ValuesItems';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Values() {
    const containerRef = useRef(null); 
    
    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })
    }, [])

    return (
        <div ref={containerRef} className='min-h-screen flex flex-col items-center justify-between gap-12 mt-16'>
            <ValuesItems items={[
                'Trust',
                'Reselience',
                'Innovation',
                'Collaboration',
                'Identity'
            ]} />

            <p className='text-center text-3xl md:text-5xl'>
                <span className='block mb-8'>
                    ❞ Let's build a
                </span>
                <span className='font-semibold'>
                    {`perfect-pixel `}
                </span>
                <span className='italic'>
                    & memorable
                </span>
                <span className='block mt-8'>
                    <span>
                        {`web application `}
                    </span>
                    <span className='text-gold font-semibold'>
                        {`together `}
                    </span>
                    <span>
                        ❞
                    </span>
                </span>
            </p>

            <ValuesItems 
                items={['contact me', 'contact me', 'contact me', 'contact me', 'contact me']}
                reverse={true}
                className='text-black bg-transparent border-y-2'
                iconClassName='bg-gold stroke-1 text-transparent block'
                icon='material-symbols-light:square' 
            />
        </div>
    )
}

export default Values