import React, { useRef } from 'react'

// pic
import gitIcon from '../../pics/github.png';

// components
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated'

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Contact() {

    const contactRef = useRef(null);

    useGSAP(() => {
        if(contactRef.current) {
            gsap.from(contactRef.current, {
                y: 100,
                opacity: 0,
                delay: 0.7,
                duration: 1,
                stagger: 0.3,
                ease: 'back.out',
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top bottom',
                    toggleActions: "play none none reverse", 
                }
            })
        }
    }, [])

    return (
        <div className='min-h-screen bg-black flex flex-col justify-between'>
            <HeaderTextAnimated
                subHeader={'🦉'}
                subHeaderClassName="text-xl"
                header={'Contact'}
                description={"Send your message to me ✉️"}
                color={'text-white'}
                hasScroll={true}
                duration={1}
            />

            <div ref={contactRef} className="flex px-10 font-light text-white uppercase lg:text-[32] text-[26px] leading-none mb-10">
                <div className="flex flex-col w-full gap-10">
                    <div className='social-link'>
                        <h2>
                            email
                        </h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <a className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl' href="mailto:ali.nabizadeh79@yahoo.com">ali.nabizadeh79@yahoo.com</a>
                    </div>

                    <div className='social-link'>
                        <h2>
                            phone
                        </h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <a className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl' href="tel:9105950836">9105950836</a>
                    </div>

                    <div className='social-link'>
                        <h2>
                            github
                        </h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <a className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl' href="https://github.com/aliNzLami">
                            <img width='45' src={gitIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact