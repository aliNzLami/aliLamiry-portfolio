import React from 'react'
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated';
import { useMediaQuery } from 'react-responsive';
import headerMobile from '../../pics/header-mobile.jpg';
import headerDesktop from '../../pics/header-desktop.jpg';

function Home() {

    const isMobile = useMediaQuery({maxWidth: '768px'});

    const whatIDo = `I transfer good experiences to the user by building interfaces. 
    My job is to turn complexity into simplicity. 
    No matter how complicated the data structures and APIs are, 
    I make comfort and ease for the users.`

    return (
        <>

          <figure className=''>
              <div className='headerImgHolder'>
                <img src={isMobile ? headerMobile : headerDesktop} alt="y2k header" />
              </div>
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