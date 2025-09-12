import React, { useEffect, useState } from 'react';
import ReactLenis from 'lenis/react';

// css
import './assets/css/main.css';

// components
import Navbar from './assets/components/Navbar';

// pages
import Home from './assets/pages/home/Home';
import Services from './assets/pages/services/Services';
import About from './assets/pages/about/About';
import Skills from './assets/pages/skills/Skills';
import Experience from './assets/pages/experiences/Experience';
import Works from './assets/pages/works/Works';
import Values from './assets/pages/values/Values';
import Contact from './assets/pages/contact/Contact';

// gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)


function App() {
    const [progress, setProgress] = useState(0);

    const navsList = [
        { title: 'home', component: <Home /> },
        { title: 'services', component: <Services /> },
        { title: 'about', component: <About /> },
        { title: 'skills', component: <Skills /> },
        { title: 'experiences', component: <Experience /> },
        { title: 'works', component: <Works /> },
        { title: 'values', component: <Values /> },
        { title: 'contact', component: <Contact /> },
    ]

    useEffect(() => {
      if (progress >= 100) return;
  
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 500); // adjust delay as needed
  
      return () => clearInterval(interval);
    }, [progress]);
    
    return (
      <>
        <ReactLenis root className='relative w-screen min-h-screen'>

          <div className={`${progress === 100 ? 'hidden' : 'flex' } fixed inset-8 z-[999] flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light w-full h-full top-[0] left-[0]`}>
            <p className='mb-4 text-xl tracking-wildest animate-pulse font-normal'>
              Loading {Math.floor(progress)}%
            </p>
            
            <div className='relative h-1 overflow-hidden rounded w-68 bg-white/20'>
              <div className={`absolute top-0 left-0 h-full transition-all duration-300 bg-white w-[${progress}%]`}>

              </div>
            </div>
          </div>

          <div className={`${progress === 100 ? 'opacity-100' : 'opacity-0' }`}>
            <Navbar navsList={navsList} />
            {
              navsList.map(item => {
                return (
                  <section key={item.title} id={item.title}>
                    { item.component }
                  </section>
                )
              })
            }
          </div>
        </ReactLenis>
      </>
    )
}

export default App