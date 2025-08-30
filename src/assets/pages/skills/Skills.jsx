import React, { useState } from 'react'

// context
import { skillsList } from '../../context/skills'

// motion
import { motion } from "motion/react";

// components
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated'
import DraggableContainer from '../../components/general/DraggableContainer'
import InsideCardSkills from './InsideCardSkills';


function Skills({}) {

  // ---------------------- Variables ---------------------- //
    const defaultConfig = {
        rotation: 4,
        scale: 0.06,
        perspective: 600,
    };
    const config = { ...defaultConfig };

  // ---------------------- States ---------------------- //
    const [items, setItems] = useState([...skillsList]);
    

  // ---------------------- Functions ---------------------- //
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

            <div className="flex justify-center items-center mb-30 md:mt-10 w-full h-[600px] md:h-[500px] relative">
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
                                    <InsideCardSkills item={item} />
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