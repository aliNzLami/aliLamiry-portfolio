import React, { useState } from 'react'
import HeaderTextAnimated from './general/HeaderTextAnimated'
import { skillsList } from '../context/skills'

import { motion } from "motion/react";
import DraggableContainer from './general/DraggableContainer'
import Card from './general/Card';

function Skills({}) {

    const defaultConfig = {
        rotation: 4,
        scale: 0.06,
        perspective: 600,
    };

        const [items, setItems] = useState([...skillsList]);
        const config = { ...defaultConfig };
      
        const sendToBack = (title) => {
          setItems((prev) => {
            const newItems = [...prev];
            const index = newItems.findIndex((item) => item.title === title);
            const [item] = newItems.splice(index, 1);
            newItems.unshift(item);
            return newItems;
          });
        };

    return (
        <div className='min-h-screen'>
            <HeaderTextAnimated
                subHeader={'Expertis'}
                header={'Skills'}
                description={"Flip the cards."}
                color={'text-black'}
                hasScroll={true}
                duration={1}
            />

            <div className="flex justify-center items-center md:mt-10 relative">
                {
                    items.map((item, index) => {
                        return(
                            <DraggableContainer
                                key={item.title}
                                onSendToBack={() => sendToBack(item.title)}
                                className={`absolute cursor-grab top-[0]`}
                                >
                                <motion.div
                                    className="h-full w-full"
                                    animate={
                                        {
                                            rotateZ: (items.length - index - 1) * config.rotation,
                                            scale: 1 + index * config.scale - items.length * config.scale,
                                            transformOrigin: "90% 90%",
                                        }
                                    }
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <Card lightOrDark={item.mode}>
                                        <span className={`${item.mode == 'dark' ? 'text-white' : '' } font-semibold text-center block text-xl`}>
                                            { item.title }
                                        </span>
                                        <div className="flex justify-center items-center h-full">
                                            <div className={`grid skillsGrid_${item.items.length > 4 ? 'three' : 'one' }`}>
                                                {
                                                    item.items.map((cardInfo, cardIndex) => {
                                                        return(
                                                            <span className={`${item.mode == 'dark' ? 'text-white' : '' } font-normal`} key={cardIndex}>
                                                                { cardInfo.name }
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </DraggableContainer>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills