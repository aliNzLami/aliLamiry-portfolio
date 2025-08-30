import React, { useRef } from 'react'
import HeaderTextAnimated from './general/HeaderTextAnimated'
import { workExperience } from '../context/workExperience'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Experience() {

    const experiencesRef = useRef([]);
    const experienceItemsRef = useRef([]);

    useGSAP(() => {
        if(experiencesRef.current.length) {
            experiencesRef.current.forEach((element, index) => {
                gsap.to(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: `top top`,
                        end: "bottom top",
                        pin: true,
                        pinSpacing: true,
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                })
            })
        }
    }, [])

    return (
        <div className='min-h-screen bg-black rounded-t-4xl'>
            <HeaderTextAnimated
                description={"Let's talk about my path, from the first."}
                header={'Experiences'}
                subHeader={'My Journey'}
                color={'text-white'}
                hasScroll={true}
            />
            
            <div className='mt-10'>
                {
                    workExperience.map( (item, index) => {
                        return(
                            <div 
                                key={index} 
                                ref={(element) => experiencesRef.current[index] = element}
                                className="px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
                            >
                                <div className="flex items-center justify-between gap-4 font-light">
                                    <div className="flex flex-col gap-6 w-full">
                                        <h2 className='flex justify-between w-full items-center flex-col md:flex-row'>
                                            <span className='text-xl font-semibold md:text-4xl lg:text-5xl'>
                                                { item.title }
                                            </span>
                                            <span className='text-lg'>
                                                { item.date }
                                            </span>
                                        </h2>
                                        <h3 className='text-center md:text-start pt-0 text-xl md:text-2xl lg:text-3xl'>
                                            { item.company }
                                        </h3>
                                        <p className='' ref={(element) => experienceItemsRef.current[index] = element}>
                                            {
                                                item.experiences.map((work, workIndex) => {
                                                    return(
                                                        <span 
                                                            key={workIndex} 
                                                            className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty block my-5'
                                                        >
                                                            { work }
                                                        </span>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience