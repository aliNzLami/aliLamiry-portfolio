import React from 'react'
import RenderThree from '../../components/general/RenderThree';
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated';

function Home() {

    const whatIDo = `I transfer good experiences to the user by building interfaces. 
    My job is to turn complexity into simplicity. 
    No matter how complicated the data structures and APIs are, 
    I make comfort and ease for the users.`

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