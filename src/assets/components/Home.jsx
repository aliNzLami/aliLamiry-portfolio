import React from 'react'
import RenderThree from './general/RenderThree';
import HeaderTextAnimated from './general/HeaderTextAnimated';

function Home() {

    const whatIDo = `I transfer experiences towards the user by building interfaces. 
    My job is turn complexcity to simplicity. 
    No matter how much the data structures and APIs are complicated, 
    I make comfort and easiness for the users.`

    return (
        <>

          <figure className='w-[100vw] h-[60vh] star3D pt-40 relative'>
            <RenderThree glb={`pc`} />
              <span className='firstMoon'>🌙</span>
              <span className='secondMoon'>🌕</span>
          </figure>
        
          <HeaderTextAnimated 
            description={whatIDo}
            header={'Ali Lamiry'}
            subHeader={'Frontend React Developer'}
            color={'text-black'}
          />
        </>
    )
}

export default Home