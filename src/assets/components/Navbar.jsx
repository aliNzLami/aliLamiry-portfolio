import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll';

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar({navsList}) {

    // -------------------------- Refrences -------------------------- //
    const refNav = useRef(null);
    const refLinks = useRef([]);
    const refSocial = useRef(null);
    const refTopBurger = useRef(null);
    const refBottomBurger = useRef(null);
    const tl = useRef(null);
    const burgerTL = useRef(null);


    // -------------------------- Variables & States -------------------------- //
    const socialList = [
        { title: 'E-mail', link: 'mailto: ali.nabizadeh79@yahoo.com' },
        { title: 'GitHub', link: 'https://github.com/aliNzLami'},
    ]

    const [isOpen, setIsOpen] = useState(false);


    // -------------------------- Animations -------------------------- //
    
    useGSAP(() => {
        if(refNav.current) {
            gsap.set(refNav.current, { xPercent: 100 });
            gsap.set([refLinks.current, refSocial.current], {
                autoAlpha: 0,
                x: -20
            });
    
            tl.current = gsap.timeline({ paused: true }).to(refNav.current, {
                xPercent: 0,
                duration: 0.8,
                ease: 'power3.out',
            }).to(refLinks.current, {
                autoAlpha: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.3,
                ease: 'power2.out'
            }).to(refSocial.current, {
                autoAlpha: 1,
                x: 0,
                duration: 0.5,
                ease: 'power2.out',
            }, '<+0.2');

            burgerTL.current = gsap.timeline({ paused: true }).to(refTopBurger.current, {
                rotate: 45,
                y: 3.3,
                duration: 0.2,
                ease: "power2.inOut"
            }).to(refBottomBurger.current, {
                rotate: -45,
                y: -3.3,
                duration: 0.2,
                ease: "power2.inOut"
            })
        }
    }, [])

    // -------------------------- Functions -------------------------- //
    const toggleMenu = () => {
        if(isOpen) {
            tl.current.reverse();
            burgerTL.current.reverse();
        }
        else {
            tl.current.play();
            burgerTL.current.play();
        }
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <nav ref={refNav} className='fixed z-50 flex flex-col justify-between w-full h-full uppercase bg-black text-white/80 py-5 md:py-10 ps-8 gap-y-18 md:w-1/2 md:left-1/2'>
                <div className='flex flex-col text-5xl gap-y-2 md:text-6xl'>
                    {
                        navsList.map((item, index) => {
                            return(
                                <div key={item.title} ref={(element) => (refLinks.current[index] = element)}>
                                    <Link 
                                        to={item.title} 
                                        className='transition-all duration-300 cursor-pointer hover:text-white'
                                        offset={0}
                                        smooth
                                        duration={1300}
                                        onClick={toggleMenu}
                                    >
                                        { item.title }
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div ref={refSocial} className='flex gap-8'>
                    {
                        socialList.map(item => {
                            return(
                                <div key={item.title} className="font-light mt-3">
                                    <a href={item.link} className='tracking-wider text-white/50'>
                                        { item.title }
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </nav>

            <div onClick={toggleMenu} className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-[45px] h-[45px] top-6 right-10'>
                <span ref={refTopBurger} className='block w-8 h-0.5 bg-white rounded-full origin-center' />
                <span ref={refBottomBurger} className='block w-8 h-0.5 bg-white rounded-full origin-center' />
            </div>
        </>
    )
}

export default Navbar