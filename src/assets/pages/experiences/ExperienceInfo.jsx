import React from 'react';
import AnimatedTextLines from '../../components/general/AnimatedTextLines'

function ExperienceInfo({item}) {
  return (
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
                <div className='flex items-center'>
                    <h3 className='text-center md:text-start pt-0 text-xl md:text-2xl lg:text-3xl'>
                        { item.company }
                    </h3>
                    <img className='w-[40px] rounded ms-4' src={item.logo} alt={`${item.company} company logo`} />
                </div>
                <p>
                    {
                        item.experiences.map((work, workIndex) => {
                            return(
                                <div key={workIndex} >
                                    <AnimatedTextLines 
                                        text={ work }
                                        className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty block my-5'
                                    />
                                </div>
                            )
                        })
                    }
                </p>
            </div>
        </div>
  )
}

export default ExperienceInfo