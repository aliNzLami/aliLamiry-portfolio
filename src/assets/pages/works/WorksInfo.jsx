import React from 'react'

// media query
import { useMediaQuery } from 'react-responsive';

// icon
import { Icon } from '@iconify/react/dist/iconify.js'


function WorksInfo({item}) {

    const isDesktop = useMediaQuery({maxWidth: '768px'});

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className='md:w-[50%]'>
                <img className='rounded-2xl w-[100%] imgWorks' src={isDesktop ?  item?.mobile_pic??"" : item?.pic??""} alt="portfolio projects" />
            </div>
            <div className='md:w-[50%]'>
                <span className='text-xl'>
                    {item?.description??""}
                </span>

                <div className='flex gap-10 my-10 md:my-20 justify-center md:justify-start'>
                    <a className='flex items-center font-semibold text-lg md:text-xl' target='_blank' href={item?.github??""}> 
                        <span>
                            GitHub Code 
                        </span>
                        <Icon className='md:size-6 size-5 ms-2' icon='lucide:arrow-up-right' />
                    </a>
                    <a className='flex items-center font-semibold text-lg md:text-xl' target='_blank' href={item?.live??""}> 
                        <span>
                            See Live 
                        </span>
                        <Icon className='md:size-6 size-5 ms-2' icon='lucide:arrow-up-right' />
                    </a>
                </div>

                <span className='font-semibold block text-lg md:text-xl'>
                    Technologies:
                </span>
                <div className='mb-3 flex flex-wrap md:gap-x-10 md:gap-y-5 flex-col md:flex-row mt-2 md:mt-5'>
                    {
                    item.stack.split(',').map(item => {
                        return(
                        <span className='font-normal mb-3 md:mb-0' key={item}>
                            { `• ${item}` }
                        </span>
                        )
                    })
                    }
                </div>
            </div>
            </div>
    )
}

export default WorksInfo