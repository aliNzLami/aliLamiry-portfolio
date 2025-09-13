import React from 'react'
import HeaderTextAnimated from '../../components/general/HeaderTextAnimated';
import { useMediaQuery } from 'react-responsive';
import headerMobile from '../../pics/header-mobile.jpg';
import headerDesktop from '../../pics/headerDesktop.mp4';

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
                {

                  isMobile 
                    ?  
                      <img src={headerMobile} alt="y2k header" />
                    : 
                      <video
                        controls={false} 
                        autoplay='autoplay'
                        muted={true} 
                        loop={true}
                      >
                        <source type='video/mp4' src={headerDesktop} />
                      </video>
                }
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