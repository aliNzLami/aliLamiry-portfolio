import React, { useRef } from 'react'
import GoldLine from './general/GoldLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function Services() {

  const title1_ref = useRef(null);
  const title2_ref = useRef(null);
  const title3_ref = useRef(null);
  const title4_ref = useRef(null);

  useGSAP(() => {
    if(title1_ref.current) {
      gsap.to(title1_ref.current, {
        xPercent: 20,
        scrollTrigger: {
          target: title1_ref.current,
          scrub: true
        }
      })
    }

    if(title2_ref.current) {
      gsap.to(title2_ref.current, {
        xPercent: -10,
        scrollTrigger: {
          target: title2_ref.current,
          scrub: true
        }
      })
    }

    if(title3_ref.current) {
      gsap.to(title3_ref.current, {
        xPercent: 40,
        scrollTrigger: {
          target: title3_ref.current,
          scrub: true
        }
      })
    }

    if(title4_ref.current) {
      gsap.to(title4_ref.current, {
        xPercent: -50,
        scrollTrigger: {
          target: title4_ref.current,
          scrub: true
        }
      })
    }
  }, [])

  return (
    <div className="mt-20 overflow-hidden font-light leading-snug text-center mb-40 contact-text-responsive">
        <div ref={title1_ref}>
            <p>
                Architecture
            </p>
        </div>
        <div ref={title2_ref} className='flex items-center justify-center gap-3 translate-x-16'>
          <p className='font-normal'>
            Development
          </p>
          <GoldLine />
          <p>
            Deployment
          </p>
        </div>
        <div ref={title3_ref} className='flex items-center justify-center gap-3 translate-x-[-40%]'>
          <p>
            UI
          </p>
          <GoldLine />
          <p className='font-normal'>
            Frontend
          </p>
          <GoldLine />
          <p>
            Responsive
          </p>
        </div>
        <div ref={title4_ref} className='translate-x-[48%]'>
          <p>
            Performence
          </p>
        </div>
    </div>
  )
}

export default Services