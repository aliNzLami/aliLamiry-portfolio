import React, { useRef } from 'react'

// context
import { worksList } from '../../context/works'

// components
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated'
import Accordion from '../../components/general/Accordion';
import WorksInfo from './WorksInfo';

function Works() {

    const worksRef = useRef([]);

    return (
        <div className='min-h-screen'>
            <HeaderTextAnimated
                subHeader={'Personal Projects'}
                header={'Works'}
                description={"Each skills and experiences need proof."}
                color={'text-black'}
                hasScroll={true}
                duration={1}
            />

            <div className='relative flex flex-col font-light px-10'>
              {
                worksList.map((item, index) => {
                  return (
                    <div 
                      key={index}
                      ref={(element) => worksRef[index] = element}
                      className='relative flex flex-col gap-1 py-5 curosr-pointer group md:gap-0'
                    >
                      <Accordion title={item.title} >
                          <WorksInfo item={item} />
                      </Accordion>
                    </div>
                  )
                })
              }
            </div>
        </div>
    )
}

export default Works


