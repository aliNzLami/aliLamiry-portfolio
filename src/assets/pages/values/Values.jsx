import React from 'react'
import ValuesItems from './ValuesItems';

function Values() {

    return (
        <div className='min-h-screen flex flex-col items-center justify-between gap-12 mt-16 valuesBg'>
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