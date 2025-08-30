import React from 'react';
import Card from '../../components/general/Card';


function InsideCardSkills({item}) {
  return (
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
  )
}

export default InsideCardSkills