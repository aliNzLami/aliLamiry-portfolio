import React from 'react'

function Card({children, lightOrDark}) {
    return (
        <div className={`shadow-lg p-5 rounded mainBoxShadow w-[300px] md:w-[450px] h-[600px] md:h-[500px] ${lightOrDark == 'dark' ? 'bg-black' : 'bg-white' }`}>
            { children }
        </div>
    )
}

export default Card