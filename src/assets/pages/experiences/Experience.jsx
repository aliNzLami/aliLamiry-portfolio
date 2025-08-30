import React, { useRef } from 'react'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// context
import { workExperience } from '../../context/workExperience'

// components
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated'
import ExperienceInfo from './ExperienceInfo'

function Experience() {

    const experiencesRef = useRef([]);

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
        <div className='min-h-screen bg-black rounded-4xl experienceMarginTop'>
            <HeaderTextAnimated
                subHeader={'My Journey'}
                header={'Experiences'}
                description={"Let's talk about my path, from the first."}
                color={'text-white'}
                hasScroll={true}
                duration={1}
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
                                <ExperienceInfo item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience