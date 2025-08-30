import React, { useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Observer);

function ValuesItems({
  className = 'text-white bg-black',
  items,
  iconClassName = '',
  icon = 'mdi:star-four-points',
  reverse = false,
}) {


  // ---------------------- Ref ---------------------- //
  const boxRef = useRef(null);
  const itemsRef = useRef([]);


  // ---------------------- Animation ---------------------- //
  useGSAP(() => {
    const direction = boxRef.current.offsetWidth * ( reverse ? 1 : -1 )
    gsap.to(itemsRef.current, {
      duration: 20,
      ease: "none",
      x: `+=${direction * 2}`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (direction)) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });
  }, [])

  
  return (
    <div
      ref={boxRef}
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="flex">
        {[...Array(2)].map((_, dupIndex) =>
          items.map((text, index) => (
            <span
              ref={(el) => {
                if (dupIndex === 0) itemsRef.current[index] = el;
              }}
              className="flex items-center px-16 gap-x-32"
              key={`${dupIndex}-${index}`}
            >
              <span className="block">{text}</span>
              <Icon icon={icon} className={iconClassName} />
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default ValuesItems;